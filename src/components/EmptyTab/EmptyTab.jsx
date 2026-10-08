import '@/components/EmptyTab/EmptyTab.css';

export default function EmptyTab({ name }) {
  return <section className="empty-tab" aria-label={name} />;
}
