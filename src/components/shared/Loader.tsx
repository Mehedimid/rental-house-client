// components/Loader.tsx
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <div className="absolute inset-1 rounded-full border-4 border-secondary border-b-transparent animate-spin-slow"></div>
      </div>
    </div>
  )
};

export default Loader;
