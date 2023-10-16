/**
 * @typedef {import("@prismicio/client").Content.RichTextBodySlice} RichTextBodySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextBodySlice>} RichTextBodyProps
 * @param {RichTextBodyProps}
 */
const RichTextBody = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for rich_text_body (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RichTextBody;
