// FlagImage — renders a country flag from flagcdn.com, replacing emoji flags
export function FlagImage({ code, size = 20 }: { code: string; size?: number }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      width={size}
      height={Math.round(size * 0.67)}
      style={{ borderRadius: 3, objectFit: "cover", display: "inline-block", verticalAlign: "middle" }}
      alt={code.toUpperCase()}
    />
  );
}
