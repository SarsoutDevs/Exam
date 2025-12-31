import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      {/* Image */}
      <Image
        src={post.image}
        alt={post.titre}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      {/* Contenu */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{post.titre}</h3>

        <p className="text-sm text-gray-600">{post.extrait}</p>

        <Link
          href={`/blog/${post.id}`}
          className="inline-block text-blue-600 font-medium hover:underline"
        >
          Lire plus →
        </Link>
      </div>
    </div>
  );
}
