import { serviceNavigation } from "./serviceNavigation";

export default function ServiceLinks({ current }: { current?: string }) {
  return <nav className="service-shortcuts" aria-label="Explore locksmith services">
    <div className="shell">
      {serviceNavigation.filter(item => item.slug !== current).map(item =>
        <a key={item.slug} href={`/${item.slug}/`}>{item.label}</a>
      )}
    </div>
  </nav>;
}
