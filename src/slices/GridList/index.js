/**
 * @typedef {import("@prismicio/client").Content.GridListSlice} GridListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridListSlice>} GridListProps
 * @param {GridListProps}
 */
const GridList = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for grid_list (variation: {slice.variation}) Slices
    </section>
  );
};

export default GridList;
