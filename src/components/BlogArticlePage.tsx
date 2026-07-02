import Link from "next/link";
import { FinalCta } from "@/components/Sections";
import { blogPosts, site, type BlogPost } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function BlogArticlePage({ post, locale }: { post: BlogPost; locale: Locale }) {
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const articleUrl = `/${locale}/${post.slug}`;

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

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <span className="pill">{post.category[locale]} · {post.readTime}</span>
            <h1 className="display">{post.h1[locale]}</h1>
            <p className="lead">{post.excerpt[locale]}</p>
            <div className="article-meta-row">
              <span>{locale === "ar" ? "آخر تحديث" : "Last Updated"}: {post.lastUpdated}</span>
              <span>{post.author[locale].name}</span>
            </div>
          </div>
          <div className="article-cover">
            <img src={post.coverImage} alt={post.coverAlt[locale]} />
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
              <a href={`https://wa.me/?text=${encodeURIComponent(`https://alialheneiti.com${articleUrl}`)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://alialheneiti.com${articleUrl}`)}&text=${encodeURIComponent(post.title[locale])}`} target="_blank" rel="noopener noreferrer">X / Twitter</a>
            </div>
          </aside>

          <article className="article article-premium">
            {post.introduction[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            {post.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.heading[locale]}</h2>
                {section.body[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
              <p>{locale === "ar" ? "أرسل صورك عبر واتساب للحصول على توجيه أولي حول الخيارات، المدة، والخطوة التالية." : "Send your smile photos on WhatsApp for initial guidance on options, timing, and next steps."}</p>
              <a className="button pistachio" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{locale === "ar" ? "احجز استشارة" : "Book a Consultation"}</a>
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
