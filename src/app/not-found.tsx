export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
      <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-accent underline">Go Home</a>
    </div>
  );
}
