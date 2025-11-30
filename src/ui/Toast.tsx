export default function Toast({ toast }: { toast: string }) {
  if (!toast) return;
  return (
    <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up z-50">
      {toast}
    </div>
  );
}
