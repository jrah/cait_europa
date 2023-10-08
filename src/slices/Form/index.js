/**
 * @typedef {import("@prismicio/client").Content.FormSlice} FormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormSlice>} FormProps
 * @param {FormProps}
 */
"use client"
import SliceSection from "@/components/slices/SliceSection";
import { PrismicRichText } from "@prismicio/react";
import SliceHeading from "@/components/slices/SliceHeading";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
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
      <h2 className=" primary-text-color text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h2 className=" primary-text-color text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {children}
      </h2>
    ),
    heading4: ({ children }) => (
      <h2 className=" primary-text-color text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {children}
      </h2>
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
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSubmitted(true)
    }, 2000)

  }
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
          <textarea
            id={label}
            name={label}
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={''}
          /></div>
      </div>
    );
  };

  const Paragraph = ({ children }) => {
    return <p>{children}</p>
  };

  const FormStatusIcon = ({ isSubmitted, isProcessing }) => {

    if (isProcessing) {
      return <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    }
    if (isSubmitted) {
      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-green-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    }
  }


  const Submit = ({ children }) => {
    return (
      <div className="form-item mt-6 flex items-center gap-3">
        <button
          type="submit"
          className="button-primary button px-6 disabled:cursor-not-allowed disabled:opacity-75"
          disabled={isProcessing || isSubmitted ? true : false}
          onClick={handleSubmit}
        >
          <div className="flex items-center gap-6">
            <span>{children}</span>
          </div>
        </button>
        <FormStatusIcon isSubmitted={isSubmitted} isProcessing={isProcessing} />
      </div >
    );
  };
  const Body = ({ children }) => {
    return (
      <PrismicRichText field={children} components={{
        image: ({ node }) =>
        (
          <PrismicNextImage field={node} className="mb-6" />
        )
      }} />
    )
  }

  const formTypes = {
    text: TextInput,
    email: EmailInput,
    submit: Submit,
    combobox: ComboBox,
    textarea: TextArea,
    paragraph: Paragraph,
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
  const isExistsBody = (context) => {
    return context.length > 1
  }
  return (
    <div className="container">
      <div className="mb-6">
        <SectionHeading heading={primary.heading} />
        <div className="mt-2 max-w-2xl">
          <PrismicRichText field={primary.sub_heading} components={{
            paragraph: ({ children }) => <p className="paragraph-heading">{children}</p>,
          }} />
        </div>
      </div>
      <div className={isExistsBody(primary.body) && styles["layout"]}>
        <form className="grid gap-6">
          {items.map((item, index) => {
            const FormType = formTypes[formTypeSantize(item.type)];
            if (FormType) {
              return <FormType key={index} label={formInputID(item.text)} type={formTypeSantize(item.type)} extended={richTextGetExtended(item.text)}>{richTextGetLabel(item.text)}</FormType>;
            } else {
              return <div key={index}>Unknown Form Element: {formTypeSantize(item.type)}</div>;
            }
          })}
        </form>
        {isExistsBody(primary.body) && <div className="prose"><Body>{primary.body}</Body></div>}
      </div>
    </div >
  );
};

export default Form;
