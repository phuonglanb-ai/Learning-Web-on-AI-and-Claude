import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-brand-500">404</p>
      <h1 className="mt-4 text-xl font-semibold text-ink-900">Không tìm thấy trang / Page not found</h1>
      <p className="mt-2 text-sm text-ink-500">
        Nội dung bạn tìm không tồn tại hoặc đã được di chuyển. / The content you&apos;re looking for
        doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-6 rounded-md bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
      >
        Về trang chủ / Back home
      </Link>
    </div>
  );
}
