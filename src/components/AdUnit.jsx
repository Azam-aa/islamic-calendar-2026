const AdUnit = ({ className, format = "horizontal" }) => {
  // In a real implementation this would hold the <ins className="adsbygoogle" ... /> component
  return (
    <div className={`flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 text-slate-400 overflow-hidden ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-widest opacity-60">Advertisement</span>
      {format === 'horizontal' ? (
         <span className="text-[10px] mt-1 opacity-40 text-center px-4">Responsive Ad Unit Space (Lazy Loaded)</span>
      ) : null}
    </div>
  );
};

export default AdUnit;
