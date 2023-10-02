/**
 * @typedef {import("@prismicio/client").Content.FormSlice} FormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormSlice>} FormProps
 * @param {FormProps}
 */

import SliceSection from "@/components/slices/SliceSection";
import { PrismicRichText } from "@prismicio/react";
import SliceHeading from "@/components/slices/SliceHeading";
import styles from "./index.module.scss";
import clsx from "clsx";
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
        <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">{children}</label>
        <div className="mt-2">
          <input className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name={label} id={label} type={type} placeholder={children} />
        </div>
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
    const { extended, children } = props
    return (
      <div className="form-item">
        <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">{children}</label>
        <div className="mt-2">
          <select
            id={label}
            name={label}
            autoComplete={`${label}-name`}

            className={clsx("px-3 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6", styles.select)}
          ><PrismicRichText field={extended} components={{
            list: ({ children }) => children,
            listItem: ({ children }) => <option>{children}</option>
          }} />
          </select></div>
      </div>
    );
  };

  const TextArea = ({ label, children }) => {
    return (
      <div className="form-item">
        <label htmlFor={label}>{children}</label>

        <div className="mt-2">
          <p className="mb-3 text-sm leading-6 text-gray-600">{children}</p>
          <textarea
            id={label}
            name={label}
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={''}
          /></div>
      </div>
    );
  };

  const Submit = ({ children }) => {
    return (
      <div className="form-item mt-6">
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
  const richTextGetLabel = (context) => {
    if (!Array.isArray(context)) return false
    const [label] = context
    return label.text
  }
  const richTextGetExtended = (context) => {
    if (context.length < 2) return []
    return context.slice(1);
  }
  const formInputID = (context) => {
    const getID = richTextGetLabel(context)
    return getID.replace(/\s/g, '').toLowerCase()

  }
  return (
    <div className="container">
      <SectionHeading heading={primary.heading} />
      <form className="grid gap-8">
        {items.map((item, index) => {
          const FormType = formTypes[formTypeSantize(item.type)];
          if (FormType) {
            return <FormType key={index} label={formInputID(item.text)} type={formTypeSantize(item.type)} extended={richTextGetExtended(item.text)}>{richTextGetLabel(item.text)}</FormType>;
          } else {
            return <div key={index}>Unknown Form Element: {formTypeSantize(item.type)}</div>;
          }
        })}

      </form>
    </div>
  );
};

export default Form;
