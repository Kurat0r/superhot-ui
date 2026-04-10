/**
 * ShEmptyState — the Quiet World (atmosphere-guide.md Rule 9).
 * Renders a centered void state with a mantra and optional hint.
 * No hooks — safe to call as plain function in tests.
 *
 * @param {object} props
 * @param {string} props.mantra - Primary empty-state message (e.g. "STANDBY", "NO DATA")
 * @param {string} [props.hint] - Keyboard shortcut or action hint (e.g. "Ctrl+K")
 * @param {string} [props.class]
 */
export function ShEmptyState({ mantra, hint, class: cls, ...rest }) {
  const className = ["sh-empty-state", cls].filter(Boolean).join(" ");
  return (
    <div class={className} {...rest}>
      <div class="sh-empty-state__mantra">{mantra}</div>
      {hint && <div class="sh-empty-state__hint">{hint}</div>}
    </div>
  );
}
export default ShEmptyState;
