# Schema Report

## Implemented

- WebSite and Organization on every indexable page
- WebPage on every page
- BlogPosting on the ten detailed articles
- BreadcrumbList on nested pages
- AboutPage on About
- ContactPage on Contact
- FAQPage where the same questions and answers are visibly rendered

## Excluded intentionally

GovernmentOrganization, Product, Offer, Service, Review, AggregateRating, fake Person authors, and SearchAction were not used. The site does not sell devices, provide Lifeline service, hold government status, publish reviews, or expose a URL-based search endpoint.

## Validation performed

The build QA parsed every JSON-LD block as JSON and checked that FAQ questions were present in the visible HTML. External Google or Schema.org validators were not available in the sandbox, so live rich-result eligibility remains a post-deployment check.
