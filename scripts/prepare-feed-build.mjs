import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

// Generates reviewed, sequential Figwright requests; execution is separate.
const phase = process.argv[2];
const directory = 'output/figma-exports/feed-refactor';
const references = {};
try {
  await readFile(`${directory}/${phase}-results.json`);
  throw new Error(`Phase ${phase} already has execution results. Inspect and resume unfinished requests instead of replaying creation calls.`);
} catch (error) { if (error.code !== 'ENOENT') throw error; }
await mkdir(directory, { recursive: true });
for (const file of ['output/figma-exports/feed-refactor-setup.json', ...(await readdir(directory)).filter(name => name.endsWith('-results.json')).map(name => `${directory}/${name}`)]) {
  try {
    for (const item of JSON.parse(await readFile(file, 'utf8'))) {
      if (item.request.as && item.data) references[item.request.as] = item.data;
    }
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
const requests = [];
const ref = (name, field = 'nodeId') => ({ $ref: `${name}.${field}` });
const push = (name, args, as) => requests.push({ name, arguments: args, ...(as ? { as } : {}) });
const batch = ops => ops.forEach(operation => push(operation.tool, operation.params));
const op = (tool, params) => ({ tool, params });
const colors = { paper: '#F5F5F7', white: '#FFFFFF', ink: '#1D1D1F', dark: '#161617', muted: '#6E6E73', pale: '#A1A1A6', blue: '#0071E3' };
const rgb = hex => ({ r: parseInt(hex.slice(1, 3), 16) / 255, g: parseInt(hex.slice(3, 5), 16) / 255, b: parseInt(hex.slice(5, 7), 16) / 255 });
// Figma's style/variable lookup API currently fails to connect. Keep exact token
// values on editable nodes; component instances provide reuse until binding works.
const fill = (id, color) => [op('set_fills', { nodeId: id, fills: [{ type: 'SOLID', color: rgb(colors[color]) }] })];
const typography = {
  display: [80, 'Inter', 'Semi Bold', 110], headline: [64, 'Inter', 'Semi Bold', 110],
  section: [40, 'Inter', 'Medium', 120], lead: [32, 'Inter', 'Regular', 135],
  body: [28, 'Inter', 'Regular', 140], meta: [22, 'JetBrains Mono', 'Regular', 130],
  code: [26, 'JetBrains Mono', 'Regular', 150],
};
const assets = path.resolve('output/carousel/bk-mtsngresik-v2/assets').replaceAll('\\', '/');
const landing = `${assets}/01_landing_page.png`;
const modal = `${assets}/20_admin_bulk_download_merged_pdf.png`;

function frame(name, parent, width, height, color, x = 0, y = 0) {
  push('create_frame', { name, parentId: ref(parent), width, height, x, y }, name);
  batch(color ? fill(ref(name), color) : [op('set_fills', { nodeId: ref(name), fills: [] })]);
}
function column(name, parent, gap = 24) {
  frame(name, parent, 920, 100);
  batch([
    op('set_auto_layout', { nodeId: ref(name), layoutMode: 'VERTICAL', itemSpacing: gap }),
    op('set_layout_props', { nodeId: ref(name), layoutSizingHorizontal: 'FILL', layoutSizingVertical: 'HUG' }),
  ]);
}
function text(name, parent, characters, style = 'body', color = 'ink', width = 920) {
  const [fontSize, family, fontStyle, lineHeight] = typography[style];
  push('create_text', { parentId: ref(parent), characters }, name);
  batch([
    op('rename_node', { nodeId: ref(name), name: `Text / ${name}` }),
    op('set_text_properties', { nodeId: ref(name), fontName: { family, style: fontStyle }, fontSize, lineHeight: { unit: 'PERCENT', value: lineHeight }, letterSpacing: { unit: 'PERCENT', value: fontSize >= 64 ? -3 : 0 } }),
    op('resize_nodes', { nodeIds: [ref(name)], width, height: 40 }),
    op('set_text_properties', { nodeId: ref(name), textAutoResize: 'HEIGHT' }),
    ...fill(ref(name), color),
  ]);
}
function crop(name, parent, file, box, width = 920) {
  const scale = width / box.w;
  frame(name, parent, width, box.h * scale);
  push('import_image', { path: file, parentId: ref(name), name: `Image / ${name}`, width: 2880 * scale, height: 1800 * scale, x: -box.x * scale, y: -box.y * scale, scaleMode: 'FIT' }, `${name}_image`);
}
function post(name, parent, color, x, y) {
  frame(name, parent, 1080, 1350, color, x, y);
  batch([
    op('set_auto_layout', { nodeId: ref(name), layoutMode: 'VERTICAL', paddingTop: 80, paddingRight: 80, paddingBottom: 80, paddingLeft: 80, itemSpacing: 32, primaryAxisAlignItems: 'SPACE_BETWEEN' }),
    op('set_layout_props', { nodeId: ref(name), layoutSizingHorizontal: 'FIXED', layoutSizingVertical: 'FIXED' }),
  ]);
}
function footer(name, parent, label, light = false) {
  column(name, parent, 12);
  text(`${name}_brand`, name, '@berkahbekhan.inc', 'meta', light ? 'pale' : 'muted');
  text(`${name}_label`, name, label, 'meta', light ? 'pale' : 'muted');
}
function component(name) { push('create_component', { fromNodeId: ref(name), name: `Feed / ${name}` }, `${name}_master`); }

push('use_file', { sessionId: process.env.FIGWRIGHT_SESSION_ID ?? 'id-mv5238q0-n46cnqvo' });
push('navigate_to_page', { pageId: ref('page') });

if (phase === 'styles') {
  for (const [name, hex] of Object.entries(colors)) {
    push('create_paint_style', { name: `Feed Refactor / ${name}`, paints: [{ type: 'SOLID', color: rgb(hex) }] }, `color_${name}`);
  }
  for (const [name, size, family, style, line] of [['headline', 64, 'Inter', 'Semi Bold', 110], ['section', 40, 'Inter', 'Medium', 120], ['lead', 32, 'Inter', 'Regular', 135], ['body', 28, 'Inter', 'Regular', 140], ['meta', 22, 'JetBrains Mono', 'Regular', 130], ['code', 26, 'JetBrains Mono', 'Regular', 150]]) {
    push('create_text_style', { name: `Feed Refactor / ${name}`, fontName: { family, style }, fontSize: size, lineHeight: { unit: 'PERCENT', value: line }, letterSpacing: { unit: 'PERCENT', value: size >= 64 ? -3 : 0 } }, name);
  }
  for (const [name, x, y, width, height] of [['Audit', 0, 0, 3500, 1800], ['Components', 0, 2100, 4800, 1600], ['Posts', 0, 4100, 3600, 3100], ['Overview', 3900, 4100, 3600, 4600]]) {
    push('create_section', { name: name === 'Overview' ? 'Feed Overview' : name, parentId: ref('page'), x, y, width, height }, name);
  }
  frame('audit_notes', 'Audit', 1850, 1550, 'paper', 1450, 100);
  batch([op('set_auto_layout', { nodeId: ref('audit_notes'), layoutMode: 'VERTICAL', paddingTop: 80, paddingLeft: 80, paddingRight: 80, paddingBottom: 80, itemSpacing: 48 })]);
  text('audit_title', 'audit_notes', 'Dari presentasi teknis,\nke cerita yang dipahami klien.', 'headline', 'ink', 1600);
  text('audit_findings', 'audit_notes', 'PERTAHANKAN\nScreenshot asli, warna produk, dan bukti implementasi.\n\nUBAH\nHeadline bahasa Indonesia. Satu manfaat per post.\nVariasikan posisi gambar dan kepadatan tulisan.\nDetail framework pindah ke caption.\n\nKOREKSI\nJangan ulangi klaim 1.000+ pengguna atau penghematan waktu\ntanpa data. Proses PDF memakai file sementara.\n\nAUDIENS\nUMKM dan bisnis jasa yang membutuhkan website.', 'lead', 'ink', 1600);
  push('import_image', { path: path.resolve('output/figma-exports/feed-refactor-audit/24-341.png').replaceAll('\\', '/'), parentId: ref('Audit'), name: 'Audit / Original overview - unchanged', x: 80, y: 100, width: 1100, height: 1100 * 4350 / 3400, scaleMode: 'FIT' });
} else if (phase === 'masters') {
  post('Selected_Work', 'Components', 'paper', 80, 100);
  column('selected_header', 'Selected_Work');
  text('selected_label', 'selected_header', 'PILIHAN KARYA / SISTEM SEKOLAH', 'meta', 'muted');
  text('selected_title', 'selected_header', 'Satu portal.\nDua akses.', 'display');
  text('selected_intro', 'selected_header', 'Akses guru dan siswa di BK MTsN Gresik.', 'body');
  crop('selected_visual', 'Selected_Work', landing, { x: 700, y: 315, w: 1480, h: 1100 });
  footer('selected_footer', 'Selected_Work', 'BK MTsN Gresik / Portal layanan sekolah');
  component('Selected_Work');

  post('Useful_Feature', 'Components', 'dark', 1240, 100);
  column('feature_header', 'Useful_Feature');
  text('feature_label', 'feature_header', 'DETAIL KARYA / UNDUH RAPOR', 'meta', 'pale');
  text('feature_title', 'feature_header', 'Satu kelas.\nSatu file PDF.', 'display', 'paper');
  crop('feature_visual', 'Useful_Feature', modal, { x: 865, y: 592, w: 1150, h: 616 });
  column('feature_tail', 'Useful_Feature');
  text('feature_intro', 'feature_tail', 'Pilih kelas dan semester.\nUnduh rapor dalam satu berkas.', 'lead', 'paper');
  footer('feature_footer', 'feature_tail', 'BK MTsN Gresik / Fitur rapor gabungan', true);
  component('Useful_Feature');

  post('Behind_the_Work', 'Components', 'white', 2400, 100);
  column('process_header', 'Behind_the_Work');
  text('process_label', 'process_header', 'DI BALIK KARYA / LOGIKA UNDUHAN', 'meta', 'muted');
  text('process_title', 'process_header', 'Dari tiap siswa,\nke satu berkas.', 'headline');
  column('process_code', 'Behind_the_Work', 24);
  batch([...fill(ref('process_code'), 'dark'), op('set_auto_layout', { nodeId: ref('process_code'), layoutMode: 'VERTICAL', paddingTop: 32, paddingRight: 32, paddingBottom: 32, paddingLeft: 32, itemSpacing: 32 })]);
  text('process_code_label', 'process_code', 'MergedPdfJob.php / cuplikan dipersingkat', 'meta', 'pale', 856);
  text('process_excerpt', 'process_code', '$merger->addFile($tempPdfPath);\n\n$mergedPdf = $merger->merge();', 'code', 'paper', 856);
  text('process_explanation', 'Behind_the_Work', 'Rapor dibuat per siswa, disimpan sementara,\nlalu digabung menjadi satu file PDF.\n\nSatu tombol di layar, beberapa langkah\ndi belakangnya.', 'lead');
  footer('process_footer', 'Behind_the_Work', 'BK MTsN Gresik / Catatan implementasi');
  component('Behind_the_Work');

  post('Service_Invitation', 'Components', 'paper', 3560, 100);
  column('service_header', 'Service_Invitation');
  text('service_label', 'service_header', 'JASA WEBSITE / BERKAHBEKHAN.INC', 'meta', 'muted');
  text('service_title', 'service_header', 'Website untuk\nusaha kamu.', 'display');
  text('service_intro', 'service_header', 'Mulai dari kebutuhan usahanya.', 'lead');
  column('service_prompts', 'Service_Invitation', 24);
  text('service_question1', 'service_prompts', '01  Apa jenis usahanya?', 'section');
  text('service_question2', 'service_prompts', '02  Apa yang perlu dilihat pelanggan?', 'lead');
  text('service_question3', 'service_prompts', '03  Apa yang ingin mereka lakukan?', 'lead');
  column('service_sample', 'Service_Invitation', 16);
  crop('service_visual', 'service_sample', landing, { x: 760, y: 720, w: 1360, h: 420 });
  text('service_sample_label', 'service_sample', 'Contoh karya / portal sekolah BK MTsN Gresik', 'meta', 'muted');
  column('service_cta', 'Service_Invitation', 16);
  text('service_action', 'service_cta', 'Kirim jenis usaha + kebutuhanmu lewat DM.', 'body');
  text('service_handle', 'service_cta', '@berkahbekhan.inc', 'meta', 'muted');
  component('Service_Invitation');
  push('save_screenshots', { nodeIds: ['Selected_Work_master', 'Useful_Feature_master', 'Behind_the_Work_master', 'Service_Invitation_master'].map(name => ref(name)), outDir: path.resolve(`${directory}/masters`).replaceAll('\\', '/'), scale: 1 });
} else if (phase === 'posts') {
  push('resize_nodes', { nodeIds: [ref('selected_visual')], width: 920, height: 920 * 1100 / 1480 });
  push('set_text', { nodeId: ref('process_code_label'), characters: 'MergedPdfJob.php / cuplikan dipersingkat' });
  push('set_text', { nodeId: ref('process_excerpt'), characters: '$merger->addFile($tempPdfPath);\n\n$mergedPdf = $merger->merge();' });
  for (const [name, master, x] of [['P01_Selected_Work', 'Selected_Work_master', 80], ['P02_Useful_Feature', 'Useful_Feature_master', 1240], ['P03_Service_Invitation', 'Service_Invitation_master', 2400]]) {
    push('create_instance', { componentId: ref(master), parentId: ref('Posts'), name, x, y: 100 }, name);
  }

  post('C02_Role_Choices', 'Posts', 'white', 80, 1600);
  text('c2_label', 'C02_Role_Choices', 'BK MTsN GRESIK / PILIHAN AKSES', 'meta', 'muted');
  crop('c2_visual', 'C02_Role_Choices', landing, { x: 755, y: 720, w: 1375, h: 535 });
  column('c2_story', 'C02_Role_Choices');
  text('c2_title', 'c2_story', 'Guru dan siswa,\nbeda kebutuhan.', 'headline');
  text('c2_body', 'c2_story', 'Dua pilihan akses sejak halaman awal.\nPengguna memilih jalur sesuai perannya.', 'lead');
  footer('c2_footer', 'C02_Role_Choices', 'Portal layanan sekolah / 02');

  post('C03_Merged_PDF', 'Posts', 'paper', 1240, 1600);
  text('c3_label', 'C03_Merged_PDF', 'BK MTsN GRESIK / FITUR RAPOR', 'meta', 'muted');
  crop('c3_visual', 'C03_Merged_PDF', modal, { x: 865, y: 592, w: 1150, h: 616 });
  column('c3_story', 'C03_Merged_PDF');
  text('c3_title', 'c3_story', 'Pilih kelas.\nPilih semester.', 'headline');
  text('c3_body', 'c3_story', 'Sistem menggabungkan rapor siswa\ndalam satu kelas menjadi satu file PDF.', 'lead');
  footer('c3_footer', 'C03_Merged_PDF', 'Rapor gabungan per kelas / 03');

  post('C04_Invitation', 'Posts', 'dark', 2400, 1600);
  column('c4_header', 'C04_Invitation');
  text('c4_label', 'c4_header', 'DARI KEBUTUHAN, JADI ALUR KERJA', 'meta', 'pale');
  text('c4_title', 'c4_header', 'Ada alur kerja\nyang ingin dirapikan?', 'headline', 'paper');
  text('c4_context', 'c4_header', 'Pilihan akses dan unduhan rapor adalah\ndua bagian dari karya portal sekolah ini.', 'lead', 'paper');
  column('c4_sample', 'C04_Invitation', 16);
  crop('c4_visual', 'c4_sample', landing, { x: 755, y: 720, w: 1375, h: 535 });
  text('c4_sample_label', 'c4_sample', 'BK MTsN Gresik / Contoh karya bidang pendidikan', 'meta', 'pale');
  column('c4_tail', 'C04_Invitation', 24);
  text('c4_action', 'c4_tail', 'Ceritakan kebutuhan usahamu.\nMulai lewat DM.', 'section', 'paper');
  footer('c4_footer', 'c4_tail', 'Jasa website / 04', true);
  for (const [name, folder] of [['P01_Selected_Work', 'output/feed/portal-dua-akses'], ['P02_Useful_Feature', 'output/feed/rapor-satu-pdf'], ['P03_Service_Invitation', 'output/feed/website-untuk-usaha']]) {
    push('save_screenshots', { nodeIds: [ref(name)], outDir: path.resolve(folder).replaceAll('\\', '/'), scale: 1 });
  }
  push('save_screenshots', { nodeIds: ['P01_Selected_Work', 'C02_Role_Choices', 'C03_Merged_PDF', 'C04_Invitation'].map(name => ref(name)), outDir: path.resolve('output/carousel/portal-sekolah-refactor').replaceAll('\\', '/'), scale: 1 });
} else if (phase === 'overview') {
  frame('Feed_Board', 'Overview', 3480, 4520, 'white', 60, 60);
  push('set_auto_layout', { nodeId: ref('Feed_Board'), layoutMode: 'VERTICAL', paddingTop: 80, paddingBottom: 80, paddingLeft: 80, paddingRight: 80, itemSpacing: 40 });
  column('board_header', 'Feed_Board', 16);
  text('board_title', 'board_header', 'Feed berikutnya', 'headline', 'ink', 3320);
  text('board_context', 'board_header', 'Terbaru di kiri atas. Tiga cover siap; enam slot rencana. Slot rencana bukan materi publikasi.', 'lead', 'muted', 3320);
  const planned = [
    [9, 'Detail dari karya berikutnya', 'Pilih proyek dan bukti fiturnya dahulu.'],
    [8, 'Sebelum briefing developer', 'Siapkan panduan praktis untuk calon klien.'],
    [7, 'Satu interaksi yang berguna', 'Butuh materi website bisnis yang terverifikasi.'],
    [6, 'Di balik pilihan kelas', 'Cerita proses dari implementasi yang nyata.'],
    [5, 'Karya atau alur berikutnya', 'Pilih bukti yang berbeda dari dua post awal.'],
    [4, 'Apa yang perlu ada di website?', 'Jawab satu pertanyaan calon klien.'],
  ];
  for (let row = 0; row < 3; row++) {
    const rowName = `board_row_${row}`;
    frame(rowName, 'Feed_Board', 3320, 1350);
    push('set_auto_layout', { nodeId: ref(rowName), layoutMode: 'HORIZONTAL', itemSpacing: 40 });
    if (row < 2) {
      for (const [order, title, note] of planned.slice(row * 3, row * 3 + 3)) {
        const name = `Planned_${order}`;
        post(name, rowName, 'paper', 0, 0);
        text(`${name}_status`, name, `RENCANA / POST ${order}`, 'section', 'muted');
        column(`${name}_copy`, name, 32);
        text(`${name}_title`, `${name}_copy`, title, 'headline');
        text(`${name}_note`, `${name}_copy`, note, 'lead', 'muted');
        text(`${name}_footer`, name, 'BELUM DIBUAT\nTidak untuk diekspor sebagai portofolio.', 'body', 'muted');
      }
    } else {
      for (const master of ['Service_Invitation_master', 'Useful_Feature_master', 'Selected_Work_master']) {
        push('create_instance', { componentId: ref(master), parentId: ref(rowName), name: `Overview / ${master}` });
      }
    }
  }
  push('create_section', { name: 'Delivery Preview', parentId: ref('page'), x: 3900, y: 9000, width: 3600, height: 3300 }, 'Delivery');
  frame('Delivery_Board', 'Delivery', 3480, 3100, 'white', 60, 60);
  push('set_auto_layout', { nodeId: ref('Delivery_Board'), layoutMode: 'VERTICAL', paddingTop: 80, paddingBottom: 80, paddingLeft: 80, paddingRight: 80, itemSpacing: 40 });
  column('delivery_header', 'Delivery_Board', 16);
  text('delivery_title', 'delivery_header', 'Berkahbekhan / Feed refactor', 'headline', 'ink', 3320);
  text('delivery_context', 'delivery_header', 'Atas: tiga cover. Bawah: lanjutan carousel dari cover pertama.', 'lead', 'muted', 3320);
  for (const [index, names] of [['0', ['P01_Selected_Work', 'P02_Useful_Feature', 'P03_Service_Invitation']], ['1', ['C02_Role_Choices', 'C03_Merged_PDF', 'C04_Invitation']]]) {
    const row = `delivery_row_${index}`;
    frame(row, 'Delivery_Board', 3320, 1350);
    push('set_auto_layout', { nodeId: ref(row), layoutMode: 'HORIZONTAL', itemSpacing: 40 });
    for (const name of names) {
      push('clone_node', { nodeId: ref(name) }, `preview_${name}`);
      push('reparent_nodes', { nodeIds: [ref(`preview_${name}`)], newParentId: ref(row) });
    }
  }
  push('save_screenshots', { nodeIds: [ref('Feed_Board'), ref('Delivery_Board')], outDir: path.resolve(`${directory}/overview`).replaceAll('\\', '/'), scale: 1 / 3 });
  push('save_screenshots', { nodeIds: ['P01_Selected_Work', 'P02_Useful_Feature', 'P03_Service_Invitation', 'C02_Role_Choices', 'C03_Merged_PDF', 'C04_Invitation'].map(name => ref(name)), outDir: path.resolve(`${directory}/mobile`).replaceAll('\\', '/'), scale: 1 / 3 });
  push('get_document', {}, 'final_document');
} else {
  throw new Error('Choose styles, masters, posts, or overview.');
}

await mkdir(directory, { recursive: true });
await writeFile(`${directory}/${phase}-requests.json`, JSON.stringify({ references, requests }, null, 2) + '\n');
console.log(`Prepared ${phase}: ${requests.length} requests`);
