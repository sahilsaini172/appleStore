export default function IconButton({ children, className }) {
  return <div className={`p-3.5 text-foreground ${className}`}>{children}</div>;
}
