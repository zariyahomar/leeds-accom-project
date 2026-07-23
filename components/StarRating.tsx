export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? "text-[#84ab95]" : "text-zinc-300"}>
          ★
        </span>
      ))}
    </div>
  );
}