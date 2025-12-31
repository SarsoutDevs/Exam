import Image from "next/image";
import Link from "next/link";
import blogPosts from "../../data/blogPosts";

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((item) => item.id === Number(resolvedParams.id));

  if (!post) {
    return (
      <p className="text-center text-red-500 py-20">Article introuvable</p>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Titre */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.titre}</h1>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-6">Publié le {post.date}</p>

      {/* Image */}
      <Image
        src={post.image}
        alt={post.titre}
        width={800}
        height={400}
        className="rounded-xl object-cover mb-8"
      />

      {/* Contenu */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-10">
        {post.contenu}
      </p>

      {/* Retour */}
      <Link
        href="/blog"
        className="inline-block px-6 py-2 bg-blue-600 text-white 
        rounded-lg hover:bg-blue-700 transition"
      >
        ← Retour au blog
      </Link>
    </main>
  );
}
