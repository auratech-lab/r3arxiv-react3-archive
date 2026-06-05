import {
  type CSSProperties,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  ArrowUpRight,
  BadgeInfo,
  Blocks,
  BookOpen,
  Box,
  Cpu,
  ExternalLink,
  Filter,
  Gamepad2,
  GitFork,
  GraduationCap,
  Grid3X3,
  Headset,
  Image as ImageIcon,
  Layers3,
  LibraryBig,
  Map,
  Moon,
  Palette,
  Search,
  SlidersHorizontal,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  categories,
  channels,
  kinds,
  resources,
  statuses,
  type Resource
} from "./data/resources";
import "./App.css";

const categoryIcons: Record<string, LucideIcon> = {
  Foundations: LibraryBig,
  "Ecosystem Libraries": Blocks,
  "Asset Pipeline": Box,
  "Interaction & UI": SlidersHorizontal,
  "Gaming & Physics": Gamepad2,
  "Creative Coding & Shaders": Palette,
  "XR, AR & VR": Headset,
  "Web Experiences": Layers3,
  "Performance & Debug": Cpu,
  "Learning & Theory": GraduationCap,
  "Showcases & Inspiration": Sparkles,
  "Data, Maps & AI": Map
};

const statusLabels: Record<Resource["status"], string> = {
  core: "Core",
  production: "Production",
  creative: "Creative",
  experimental: "Experimental",
  learning: "Learning"
};

const kindLabels: Record<Resource["kind"], string> = {
  article: "Articles",
  asset: "Assets",
  community: "Community",
  course: "Courses",
  docs: "Docs",
  library: "Libraries",
  reference: "Reference",
  showcase: "Showcases",
  starter: "Starters",
  tool: "Tools"
};

const previewVersion = "2026-05-27-live-546";
const themeStorageKey = "r3arxiv-theme";

function getInitialDarkMode() {
  if (typeof window === "undefined") return false;

  const storedTheme = window.localStorage.getItem(themeStorageKey);
  if (storedTheme === "dark") return true;
  if (storedTheme === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function withPreviewVersion(src: string) {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${previewVersion}`;
}

function matchesQuery(resource: Resource, query: string) {
  if (!query) return true;
  const haystack = [
    resource.title,
    resource.description,
    resource.bestFor,
    resource.category,
    resource.field,
    resource.kind,
    resource.status,
    ...resource.tags
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function ResourceVisual({ resource }: { resource: Resource }) {
  const host = getHost(resource.url);
  const imageSrc = withPreviewVersion(
    resource.image ?? `/screenshots/${resource.id}.webp`
  );

  return (
    <div
      className="resource-visual has-image"
      style={{ "--resource-color": resource.color } as CSSProperties}
    >
      <div className="visual-fallback" aria-hidden="true">
        <ImageIcon size={18} strokeWidth={1.8} />
        <span>{host}</span>
      </div>
      <img
        src={imageSrc}
        alt={`${resource.title} visual preview`}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function ResourceCard({
  resource,
  selected,
  onSelect,
  onTag
}: {
  resource: Resource;
  selected: boolean;
  onSelect: (resource: Resource) => void;
  onTag: (tag: string) => void;
}) {
  const Icon = categoryIcons[resource.category] ?? BadgeInfo;

  return (
    <article
      className={`resource-card ${resource.size ?? "standard"} ${
        selected ? "is-selected" : ""
      }`}
      style={{ "--resource-color": resource.color } as CSSProperties}
    >
      <button
        type="button"
        className="resource-main"
        onClick={() => onSelect(resource)}
        aria-pressed={selected}
      >
        <ResourceVisual resource={resource} />
        <div className="card-meta">
          <span className="category-dot" aria-hidden="true">
            <Icon size={14} strokeWidth={1.8} />
          </span>
          <span>{resource.category}</span>
          <span>{statusLabels[resource.status]}</span>
        </div>
        <h2>{resource.title}</h2>
        <p>{resource.description}</p>
      </button>

      <div className="tag-row" aria-label={`${resource.title} tags`}>
        {resource.tags.slice(0, 4).map((tag) => (
          <button
            type="button"
            className="tag-chip"
            key={tag}
            onClick={() => onTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="card-links">
        <a href={resource.url} target="_blank" rel="noreferrer">
          <ExternalLink size={15} aria-hidden="true" />
          Visit
        </a>
        {resource.github ? (
          <a href={resource.github} target="_blank" rel="noreferrer">
            <GitFork size={15} aria-hidden="true" />
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}

function DetailPanel({
  resource,
  onTag
}: {
  resource: Resource | undefined;
  onTag: (tag: string) => void;
}) {
  if (!resource) {
    return (
      <aside className="detail-panel">
        <div className="empty-detail">
          <Grid3X3 size={22} strokeWidth={1.6} />
          <p>No resource selected</p>
        </div>
      </aside>
    );
  }

  const Icon = categoryIcons[resource.category] ?? BadgeInfo;

  return (
    <aside
      className="detail-panel"
      style={{ "--resource-color": resource.color } as CSSProperties}
      aria-live="polite"
    >
      <ResourceVisual resource={resource} />
      <div className="detail-kicker">
        <Icon size={16} strokeWidth={1.8} />
        <span>{resource.category}</span>
      </div>
      <h2>{resource.title}</h2>
      <p className="detail-description">{resource.description}</p>

      <dl className="detail-list">
        <div>
          <dt>Field</dt>
          <dd>{resource.field}</dd>
        </div>
        <div>
          <dt>Best for</dt>
          <dd>{resource.bestFor}</dd>
        </div>
        <div>
          <dt>Signal</dt>
          <dd>
            {kindLabels[resource.kind]} / {statusLabels[resource.status]}
          </dd>
        </div>
      </dl>

      <div className="detail-tags">
        {resource.tags.map((tag) => (
          <button
            type="button"
            className="tag-chip"
            key={tag}
            onClick={() => onTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="detail-actions">
        <a href={resource.url} target="_blank" rel="noreferrer">
          <ExternalLink size={16} aria-hidden="true" />
          Open resource
        </a>
        {resource.github ? (
          <a href={resource.github} target="_blank" rel="noreferrer">
            <GitFork size={16} aria-hidden="true" />
            Open GitHub
          </a>
        ) : null}
      </div>
    </aside>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeKind, setActiveKind] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(resources[0]?.id);
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  const normalizedQuery = query.trim().toLowerCase();

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [isDarkMode]);

  const categoryCounts = useMemo(() => {
    return resources.reduce<Record<string, number>>((counts, resource) => {
      counts[resource.category] = (counts[resource.category] ?? 0) + 1;
      return counts;
    }, {});
  }, []);

  const tagCounts = useMemo(() => {
    const counts = resources.reduce<Record<string, number>>((acc, resource) => {
      resource.tags.forEach((tag) => {
        acc[tag] = (acc[tag] ?? 0) + 1;
      });
      return acc;
    }, {});

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 18);
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const categoryMatch =
        activeCategory === "All" || resource.category === activeCategory;
      const kindMatch = activeKind === "All" || resource.kind === activeKind;
      const statusMatch =
        activeStatus === "All" || resource.status === activeStatus;
      const tagMatch = !activeTag || resource.tags.includes(activeTag);

      return (
        categoryMatch &&
        kindMatch &&
        statusMatch &&
        tagMatch &&
        matchesQuery(resource, normalizedQuery)
      );
    });
  }, [activeCategory, activeKind, activeStatus, activeTag, normalizedQuery]);

  const selectedResource =
    filteredResources.find((resource) => resource.id === selectedId) ??
    filteredResources[0] ??
    resources.find((resource) => resource.id === selectedId);

  const previewCount = resources.length;

  function resetFilters() {
    setActiveCategory("All");
    setActiveKind("All");
    setActiveStatus("All");
    setActiveTag(null);
    setQuery("");
  }

  return (
    <main className={`app-shell ${isDarkMode ? "is-dark" : ""}`}>
      <section className="top-band">
        <div className="title-block">
          <p className="eyebrow">Curated visual wiki / May 27, 2026</p>
          <h1>R3ARXIV</h1>
        </div>
        <div className="top-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDarkMode((current) => !current)}
            aria-label={isDarkMode ? "Use light mode" : "Use dark mode"}
            title={isDarkMode ? "Use light mode" : "Use dark mode"}
          >
            {isDarkMode ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>
          <div className="stat-strip" aria-label="Archive stats">
            <span>{resources.length} resources</span>
            <span>{categories.length} channels</span>
            <span>{previewCount} visual previews</span>
          </div>
        </div>
      </section>

      <section className="workspace">
        <aside className="channel-rail" aria-label="Resource channels">
          <div className="rail-heading">
            <LibraryBig size={18} aria-hidden="true" />
            <span>Channels</span>
          </div>
          <button
            type="button"
            className={`channel-button ${activeCategory === "All" ? "is-active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            <span>All fields</span>
            <strong>{resources.length}</strong>
          </button>
          {channels.map((channel) => {
            const Icon = categoryIcons[channel.title] ?? BadgeInfo;
            const count = categoryCounts[channel.title] ?? 0;

            return (
              <button
                type="button"
                className={`channel-button ${
                  activeCategory === channel.title ? "is-active" : ""
                }`}
                key={channel.id}
                onClick={() => setActiveCategory(channel.title)}
                title={channel.signal}
              >
                <span>
                  <Icon size={15} aria-hidden="true" />
                  {channel.title}
                </span>
                <strong>{count}</strong>
              </button>
            );
          })}
        </aside>

        <section className="archive-view" aria-label="Resource archive">
          <div className="tool-bar">
            <label className="search-box">
              <Search size={18} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search physics, shaders, XR, assets..."
              />
              {query ? (
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <X size={17} aria-hidden="true" />
                </button>
              ) : null}
            </label>

            <button
              type="button"
              className="reset-button"
              onClick={resetFilters}
              title="Reset filters"
            >
              <Filter size={16} aria-hidden="true" />
              Reset
            </button>
          </div>

          <div className="filter-band" aria-label="Resource type filters">
            <button
              type="button"
              className={`filter-chip ${activeKind === "All" ? "is-active" : ""}`}
              onClick={() => setActiveKind("All")}
            >
              All types
            </button>
            {kinds.map((kind) => (
              <button
                type="button"
                className={`filter-chip ${activeKind === kind ? "is-active" : ""}`}
                key={kind}
                onClick={() => setActiveKind(kind)}
              >
                {kindLabels[kind]}
              </button>
            ))}
          </div>

          <div className="filter-band status-band" aria-label="Resource signal filters">
            <button
              type="button"
              className={`filter-chip ${
                activeStatus === "All" ? "is-active" : ""
              }`}
              onClick={() => setActiveStatus("All")}
            >
              All signals
            </button>
            {statuses.map((status) => (
              <button
                type="button"
                className={`filter-chip ${
                  activeStatus === status ? "is-active" : ""
                }`}
                key={status}
                onClick={() => setActiveStatus(status)}
              >
                {statusLabels[status]}
              </button>
            ))}
          </div>

          <div className="tag-index" aria-label="Popular tags">
            {tagCounts.map(([tag, count]) => (
              <button
                type="button"
                className={`tag-chip ${activeTag === tag ? "is-active" : ""}`}
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
                <span>{count}</span>
              </button>
            ))}
          </div>

          <div className="result-line">
            <span>
              {filteredResources.length} shown
              {activeTag ? ` / tag: ${activeTag}` : ""}
            </span>
            <span>Open cards for notes and primary links</span>
          </div>

          {filteredResources.length > 0 ? (
            <div className="resource-grid">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  selected={selectedResource?.id === resource.id}
                  onSelect={(nextResource) => setSelectedId(nextResource.id)}
                  onTag={(tag) => setActiveTag(tag)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <BookOpen size={24} strokeWidth={1.6} />
              <p>No resources match the current filters.</p>
              <button type="button" onClick={resetFilters}>
                <X size={16} aria-hidden="true" />
                Clear filters
              </button>
            </div>
          )}
        </section>

        <DetailPanel
          resource={selectedResource}
          onTag={(tag) => setActiveTag(tag)}
        />
      </section>

      <footer className="archive-footer">
        <span>Built as an Are.na-inspired working index for React Three Fiber.</span>
        <a href="https://github.com/pmndrs/react-three-fiber" target="_blank" rel="noreferrer">
          <ArrowUpRight size={15} aria-hidden="true" />
          Start at R3F
        </a>
      </footer>
    </main>
  );
}

export default App;
