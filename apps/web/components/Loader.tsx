export default function Loader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" />
      {label}
    </div>
  );
}
