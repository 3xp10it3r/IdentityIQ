export interface HtmlAttributes {
  /** HTML standard attribute, applied to component root element.  */
  id?: string;
  /** HTML standard attribute. Additional class name(s) applied to component root element.  */
  className?: string;
  /** HTML standard attribute. Custom styles applied to component root element.  */
  style?: React.CSSProperties;
  /** Pass any standard HTML data-attributes to the root element of the component through this prop. */
  dataAttributes?: any;
}
