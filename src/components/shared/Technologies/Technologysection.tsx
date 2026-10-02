import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const badgeStyles: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-green-50 text-green-600",
  Fast: "bg-orange-50 text-orange-500",
  "Full-Stack": "bg-indigo-50 text-indigo-600",
  Standard: "bg-green-50 text-green-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-blue-50 text-blue-600",
  Robust: "bg-sky-50 text-sky-600",
  Modern: "bg-teal-50 text-teal-600",
  Containers: "bg-blue-50 text-blue-600",
};

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load data from the JSON file asynchronously
  useEffect(() => {
    let active = true;
    import("../../../../public/technologies.json")
      .then((module) => {
        if (active) setTechnologies(module.default as Technology[]);
      })
      .catch(() => toast.error("Failed to load technologies."))
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleAdd = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <section id="technologies" className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Explore the{" "}
          <span className="text-brand">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-2 mb-10">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Technology grid: 1 col mobile, 2 tablet, 3 desktop */}
          <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {loading ? (
              <div className="col-span-full flex flex-col items-center justify-center py-20 gap-3">
                <div className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-pink-500 animate-spin" />
                <p className="text-sm text-gray-500">Loading technologies...</p>
              </div>
            ) : (
              technologies.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-9 h-9 object-contain"
                    />
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        badgeStyles[tech.badge] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tech.badge}
                    </span>
                  </div>

                  {/* Name + Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {tech.description}
                  </p>

                  {/* Category chip + Difficulty + Rating */}
                  <div className="flex items-center gap-2 mb-4 text-xs">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                      {tech.category}
                    </span>
                    <span className="text-gray-500">{tech.difficulty}</span>
                    <span className="ml-auto flex items-center gap-1 font-semibold text-gray-700">
                      <span className="text-yellow-400">★</span>
                      {tech.rating}
                    </span>
                  </div>

                  {/* Add to Stack */}
                  <button
                    onClick={() => handleAdd(tech)}
                    disabled={isAdded}
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isAdded
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-gray-900 text-white hover:bg-gray-700"
                    }`}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
              })
            )}
          </div>

          {/* Your Stack sidebar */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-6 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
            <p className="text-sm text-gray-400 mb-4">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} ${
                    stack.length === 1 ? "Technology" : "Technologies"
                  } Selected`}
            </p>

            {stack.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-xl py-6 text-center text-sm text-gray-400">
                Your stack is empty.
              </div>
            ) : (
              <>
                {/* 1 column list */}
                <ul className="flex flex-col gap-2 mb-5">
                  {stack.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 border border-gray-100 rounded-lg p-2.5"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-7 h-7 object-contain"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">{item.category}</p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-gray-400 hover:text-red-500 text-lg leading-none px-1"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleRemoveAll}
                  className="w-full py-2 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50 transition-colors"
                >
                  Remove All
                </button>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;