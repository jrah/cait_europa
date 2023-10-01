/**
 * @typedef {import("@prismicio/client").Content.FormSlice} FormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormSlice>} FormProps
 * @param {FormProps}
 */

import SliceSection from "@/components/slices/SliceSection";
import { PrismicRichText } from "@prismicio/react";
import SliceHeading from "@/components/slices/SliceHeading";
const Form = ({ slice, context }) => {
  return (
    <SliceSection
      contextArray={context}
      sliceId={slice.id}
      sliceType={slice.slice_type}
      sliceVariation={slice.variation}
      noContainer={slice.variation ? "textSplashWithForm" : true}
    >
      <VariationComponent data={slice} />
    </SliceSection>
  );
};

const VariationComponent = ({ data }) => {
  const { primary, items, variation } = data;
  if (variation === "default") {
    return <VariationDefault primary={primary} items={items} />;
  }
  return <VariationDefault primary={primary} items={items} />;
};

const SectionHeading = ({ heading }) => {
  console.log(heading)
  const components = {
    heading1: ({ children }) => (
      <SliceHeading
        className="primary-text-color font-bold leading-tight"
        cssModuleElement={clsx(styles.h1, styles.heading)}
        isPageHeadline={primary.page_headline}
      >
        {children}
      </SliceHeading>
    ),
    heading2: ({ children }) => (
      <h2 className=" primary-text-color text-6xl font-bold tracking-wide">
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3 className=" primary-text-color text-5xl font-bold tracking-wide">
        {children}
      </h3>
    ),
    heading4: ({ children }) => (
      <h4 className=" primary-text-color text-4xl font-bold tracking-wide">
        {children}
      </h4>
    ),
    label: ({ node, children, key }) => {
      if (node.data.label === "h1-break") {
        return (
          <span
            key={key}
            className={`${node.data.label.replace("-break", "")} block`}
          >
            {children}
          </span>
        );
      }
      return (
        <span
          key={key}
          className={`${node.data.label.replace("-break", "")} block`}
        >
          {children}
        </span>
      );
    },
  };
  return <PrismicRichText field={heading} components={components} />
}

const VariationDefault = ({ primary, items }) => {

  const BaseInput = ({ label, children, type }) => {
    return (
      <div className="form-item">
        <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name={label} id={label} type={type} placeholder={children} />
      </div>
    )
  }

  const TextInput = ({ label, ...props }) => {
    return (
      <BaseInput type="text" label={label} {...props} />
    );
  };

  const EmailInput = ({ label, ...props }) => {
    return (
      <BaseInput type="email" label={label} {...props} />

    );
  };

  const ComboBox = ({ label, ...props }) => {
    return (
      <BaseInput type="text" label={label} {...props} />
    );
  };

  const TextArea = ({ label, children }) => {
    return (
      <div className="form-item">
        <label htmlFor={label}>{label}</label>
        <textarea
          id={label}
          name={label}
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
        <p className="mt-3 text-sm leading-6 text-gray-600">{children}</p>
      </div>
    );
  };

  const Submit = ({ children }) => {
    return (
      <div className="form-item">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {children}
        </button>
      </div>
    );
  };

  const formTypes = {
    text: TextInput,
    email: EmailInput,
    submit: Submit,
    combobox: ComboBox,
    textarea: TextArea,
  }
  const formTypeSantize = (type) => {
    return type.replace(/\s/g, '').toLowerCase()
  }
  return (
    <div>
      <SectionHeading heading={primary.heading} />
      <form>
        {items.map((item, index) => {
          const FormType = formTypes[formTypeSantize(item.type)];
          if (FormType) {
            return <FormType key={index} label={formTypeSantize(item.type)} type={formTypeSantize(item.type)}>{item.text}</FormType>;
          } else {
            return <div key={index}>Unknown Form Element: {formTypeSantize(item.type)}</div>;
          }
        })}

      </form>
    </div>
  );
};

export default Form;
