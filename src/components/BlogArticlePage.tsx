import Link from "next/link";
import { FinalCta } from "@/components/Sections";
import { blogPosts, getCoverImage, getReadTime, site, type BlogPost } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function BlogArticlePage({ post, locale }: { post: BlogPost; locale: Locale }) {
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const articleUrl = `/${locale}/${post.slug}`;
  const coverImage = getCoverImage(post, locale);
  const localizedHref = (href: string) => href.startsWith("/services") || href === "/contact" ? `/${locale}${href}` : href;

  const consultationCta = post.ctaText?.[locale] ?? (locale === "ar"
    ? "لست متأكداً ما العلاج المناسب لحالتك؟ شارك صور ابتسامتك عبر واتساب بخصوصية وسيقوم الفريق بإرشادك للخطوة التالية."
    : "Not sure which treatment fits your case? Share your smile photos privately on WhatsApp and our team will guide the next step.");

  const ctaCard = (variant: "intro" | "cost" | "final") => (
    <div className={`article-inline-cta ${variant === "final" ? "final" : ""}`}>
      <p>{consultationCta}</p>
      <a className="button pistachio" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
        {locale === "ar" ? "تواصل معنا عبر واتساب" : "WhatsApp Us"}
      </a>
    </div>
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[locale],
      acceptedAnswer: { "@type": "Answer", text: faq.answer[locale] }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "ar" ? "الرئيسية" : "Home", item: `https://alialheneiti.com/${locale}` },
      { "@type": "ListItem", position: 2, name: locale === "ar" ? "المدونة" : "Dental Journal", item: `https://alialheneiti.com/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: post.title[locale], item: `https://alialheneiti.com${articleUrl}` }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1[locale],
    description: post.metaDescription[locale],
    image: `https://alialheneiti.com${coverImage}`,
    dateModified: post.lastUpdated,
    author: { "@type": "Organization", name: post.author[locale].name },
    publisher: { "@type": "Organization", name: site.brand[locale] },
    mainEntityOfPage: `https://alialheneiti.com${articleUrl}`,
    keywords: post.keywords.join(", ")
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label={locale === "ar" ? "مسار الصفحة" : "Breadcrumbs"}>
              <Link href={`/${locale}`}>{locale === "ar" ? "الرئيسية" : "Home"}</Link>
              <span>/</span>
              <Link href={`/${locale}/blog`}>{locale === "ar" ? "مجلة الدكتور علي" : "Dental Journal"}</Link>
              <span>/</span>
              <span>{post.category[locale]}</span>
            </nav>
            <span className="pill">{post.category[locale]} · {getReadTime(post, locale)}</span>
            <h1 className="display">{post.h1[locale]}</h1>
            <p className="lead">{post.excerpt[locale]}</p>
            <div className="article-meta-row">
              <span>{locale === "ar" ? "آخر تحديث" : "Last Updated"}: {post.lastUpdated}</span>
              <span>{post.author[locale].name}</span>
            </div>
          </div>
          <div className="article-cover">
            <img src={coverImage} alt={post.coverAlt[locale]} />
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container article-layout">
          <aside className="article-sidebar">
            <div className="toc-card">
              <h2>{locale === "ar" ? "محتويات المقال" : "Table of Contents"}</h2>
              <ol>
                {post.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.heading[locale]}</a></li>)}
                <li><a href="#faq">{locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</a></li>
              </ol>
            </div>
            <div className="share-card">
              <h2>{locale === "ar" ? "مشاركة" : "Social Share"}</h2>
              <a href="https://wa.me/962790169494" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M19.1 4.9A9.8 9.8 0 0 0 3.7 16.7L2.4 21.6l5-1.3a9.8 9.8 0 0 0 4.7 1.2h.1a9.8 9.8 0 0 0 6.9-16.6Zm-6.9 14.9h-.1a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 6.9 3.7Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.6.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.2-.5-.3Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a href="https://www.instagram.com/ali_alheneiti" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7.8 2.5h8.4c2.9 0 5.3 2.4 5.3 5.3v8.4c0 2.9-2.4 5.3-5.3 5.3H7.8c-2.9 0-5.3-2.4-5.3-5.3V7.8c0-2.9 2.4-5.3 5.3-5.3Zm0 1.8c-2 0-3.5 1.6-3.5 3.5v8.4c0 2 1.6 3.5 3.5 3.5h8.4c2 0 3.5-1.6 3.5-3.5V7.8c0-2-1.6-3.5-3.5-3.5H7.8Zm4.2 3.3a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.6-2.6a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </aside>

          <article className="article article-premium">
            {post.introduction[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            {ctaCard("intro")}

            {post.quickAnswer && (
              <section className="article-summary-box" aria-label={locale === "ar" ? "ملخص سريع" : "Quick answer"}>
                <h2>{locale === "ar" ? "الخلاصة السريعة" : "Quick Answer"}</h2>
                {post.quickAnswer[locale].map((item) => <p key={item}>{item}</p>)}
              </section>
            )}

            {post.internalLinks && (
              <section className="article-link-box" aria-label={locale === "ar" ? "روابط مفيدة" : "Helpful links"}>
                <h2>{locale === "ar" ? "روابط مفيدة قبل اتخاذ القرار" : "Helpful Links Before You Decide"}</h2>
                <div className="article-link-grid">
                  {post.internalLinks.map((link) => (
                    <Link className="article-link-card" href={localizedHref(link.href)} key={link.href}>
                      <strong>{link.label[locale]}</strong>
                      <span>{link.description[locale]}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {post.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.heading[locale]}</h2>
                {section.body[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.subsections?.map((subsection) => (
                  <div className="article-subsection" key={subsection.heading[locale]}>
                    <h3>{subsection.heading[locale]}</h3>
                    {subsection.body[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                ))}
                {post.comparisonTables?.filter((table) => table.afterSectionId === section.id).map((table) => (
                  <div className="article-table-card" key={table.id}>
                    <h3>{table.title[locale]}</h3>
                    <div className="article-table-wrap">
                      <table>
                        <caption>{table.title[locale]}</caption>
                        <thead>
                          <tr>{table.columns[locale].map((column) => <th key={column}>{column}</th>)}</tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row) => <tr key={row.cells[locale].join("-")}>{row.cells[locale].map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
                {section.id.includes("cost") ? ctaCard("cost") : null}
              </section>
            ))}

            <section id="faq" className="article-faq">
              <h2>{locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</h2>
              {post.faqs.map((faq) => (
                <details key={faq.question[locale]}>
                  <summary>{faq.question[locale]}</summary>
                  <p>{faq.answer[locale]}</p>
                </details>
              ))}
            </section>

            <section className="article-cta-box">
              <p className="eyebrow">{locale === "ar" ? "استشارة خاصة" : "Private Consultation"}</p>
              <h2>{locale === "ar" ? "هل تفكر بابتسامة جديدة؟" : "Thinking about a new smile?"}</h2>
              <p>{consultationCta}</p>
              <a className="button pistachio" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{locale === "ar" ? "احجز استشارتك" : "Book Your Consultation"}</a>
            </section>

            <section className="author-box">
              <strong>{post.author[locale].name}</strong>
              <span>{post.author[locale].title}</span>
              <p>{post.author[locale].bio}</p>
            </section>

            <section className="medical-disclaimer">
              <h2>{locale === "ar" ? "تنبيه طبي" : "Medical Disclaimer"}</h2>
              <p>{locale === "ar" ? "هذا المحتوى للتثقيف العام ولا يغني عن فحص طبيب الأسنان أو التشخيص الشخصي. قد تختلف النتائج والمدة والتكلفة حسب كل حالة." : "This article is for general education and does not replace a dental examination or personalized diagnosis. Results, timelines, and costs vary by individual case."}</p>
            </section>

            <section className="related-articles">
              <h2>{locale === "ar" ? "مقالات ذات صلة" : "Related Articles"}</h2>
              <div className="related-grid">
                {related.map((item) => (
                  <Link className="related-card" href={`/${locale}/${item.slug}`} key={item.slug}>
                    <span className="pill">{item.category[locale]}</span>
                    <h3>{item.title[locale]}</h3>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
