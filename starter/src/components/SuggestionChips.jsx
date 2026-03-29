const SUGGESTIONS = [
  "Ver productos",
  "Precio de remeras",
  "Envíos disponibles",
  "Quiero comprar",
];

export default function SuggestionChips({ onSelect, isLoading }) {
  return (
    <div className="suggestion-chips">
      {SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion}
          className="suggestion-chip"
          onClick={() => onSelect(suggestion)}
          disabled={isLoading}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
