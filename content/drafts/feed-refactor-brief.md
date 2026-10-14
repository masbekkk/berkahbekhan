# Feed refactor: production brief

Audience: Indonesian UMKM and service businesses. Channel: @berkahbekhan.inc. CTA: describe the business and website need by DM. Language: Indonesian. No prices, deadlines, or conversion guarantees supplied.

## Verified material

| Evidence | Supports |
| --- | --- |
| `output/carousel/bk-mtsngresik-v2/assets/01_landing_page.png` | Actual school portal with teacher/counselor and student entry choices. |
| `output/carousel/bk-mtsngresik-v2/assets/20_admin_bulk_download_merged_pdf.png` | Actual merged-PDF dialog with class and semester selectors. |
| `../bk-mtsngresik-v2/USER_MANUAL.md`, sections 5.3.2-5.3.4 | Individual report preview, ZIP export, and merged class PDF workflow. |
| `../bk-mtsngresik-v2/resources/js/pages/Mtsn/Tatib/Rekap.tsx`, `startMergedProcess` | Requires class and semester, starts generation, polls progress, initiates download. |
| `../bk-mtsngresik-v2/app/Http/Controllers/PoinController.php`, `downloadMergedByKelas` | Selects students by class and current academic year, queues report generation. |
| `../bk-mtsngresik-v2/app/Jobs/MergedPdfJob.php`, `handle` | Generates per-student PDFs, writes temporary files, merges into one saved PDF. |

Contribution is presented as the user's existing software portfolio, as requested. No assertion of sole authorship, paid client relationship, deployment date, or measured business results is added. The source application was inspected read-only; its runtime was not exercised.

## Three covers

| ID | Headline | Composition / visual | Supporting copy |
| --- | --- | --- | --- |
| P01 | Satu portal. / Dua akses. | Selected Work; light canvas; large landing-page crop | Akses guru dan siswa di BK MTsN Gresik. |
| P02 | Satu kelas. / Satu file PDF. | Useful Feature; dark canvas; only the merged-PDF dialog | Pilih kelas dan semester. Unduh rapor dalam satu berkas. |
| P03 | Website untuk / usaha kamu. | Service Invitation; light canvas; short inquiry prompts and labeled school-portal sample | Ceritakan usahanya. Tentukan kebutuhan websitenya. |

### P01 caption

Satu portal, dua jalur masuk. Di BK MTsN Gresik, guru dan siswa memilih akses sesuai perannya. Dari halaman masuk, alur berlanjut ke layanan yang mereka butuhkan.

Ini contoh karya di bidang pendidikan. Di carousel ini, lihat pilihan akses dan fitur unduh rapor gabungan per kelas.

Punya kebutuhan website untuk usaha atau organisasi? Ceritakan kebutuhanmu lewat DM @berkahbekhan.inc.

### P02 caption

Rapor satu kelas bisa digabung menjadi satu file PDF. Di portal BK MTsN Gresik, admin memilih kelas dan semester, lalu menjalankan unduhan rapor gabungan.

Fitur ini menghubungkan pilihan di layar dengan proses pembuatan dokumen. Sistem membuat rapor per siswa, lalu menggabungkannya menjadi satu PDF.

Ada pekerjaan berulang yang ingin kamu rapikan lewat website? Ceritakan alurnya lewat DM.

### P03 caption

Sedang merencanakan website untuk usaha? Mulai dari tiga hal: jenis usaha, informasi yang perlu dilihat pelanggan, dan tindakan yang ingin mereka lakukan.

Kirim jenis usaha dan kebutuhanmu lewat DM @berkahbekhan.inc. Contoh karya di post ini: portal sekolah BK MTsN Gresik.

## Four-slide carousel

| Slide | Headline | Job / evidence |
| --- | --- | --- |
| 01 | Satu portal. / Dua akses. | Reuse P01; establish project and school context. |
| 02 | Guru dan siswa, / beda kebutuhan. | Screenshot first, headline below; crop actual role choices. |
| 03 | Pilih kelas. / Pilih semester. | Focus on actual merged-PDF controls; explain one-file output in supporting text. |
| 04 | Ada alur kerja / yang ingin dirapikan? | Explain portfolio scope, show a small labeled sample, invite a relevant DM. |

Caption: use P01. The four slides describe a portfolio example and two real interactions, not a claimed before/after business improvement.

## Nine-position planning board

Posting order is chronological below; the overview reverses it so newest is top-left. Only posts 1-3 have finished covers in this release. Remaining slots are editorial notes, not published work.

| Order | Role | Angle | Status |
| --- | --- | --- | --- |
| 1 | Work | School portal: two entry paths (P01 carousel) | Build now |
| 2 | Work | One class, one PDF (P02) | Build now |
| 3 | Service | Website for your business (P03) | Build now |
| 4 | Client question | What should a business website explain first? | Planned; write examples before design |
| 5 | Work | A different verified project or distinct workflow | Planned; select evidence first |
| 6 | Process | Why class and semester must be selected | Planned; use actual source/iteration |
| 7 | Work | One useful interaction in a verified business website | Planned; business-project material needed |
| 8 | Client question | What to prepare before briefing a developer | Planned; write practical guidance |
| 9 | Work | Another verified project detail | Planned; select evidence first |

## Original Figma audit

Node `24:341` contains an overview of nine slides. It already alternates neutral canvases, but repeats headline, screenshot, technical line, explanation, footer. The new design varies content order and visual emphasis and replaces technical cover language with practical Indonesian copy.

Do not reuse unverified claims such as "1,000+ students", "under 10 seconds", or "40+ reports". The old "in-memory ... without disk I/O" statement conflicts with `MergedPdfJob.php`, which writes temporary PDF files. Original frames are preserved as an audit baseline; the refactor corrects its own copy.
