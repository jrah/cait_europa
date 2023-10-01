// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Global → Buttons*
 */
export interface GlobalDocumentDataButtonsItem {
  /**
   * Button text field in *Global → Buttons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global.buttons[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button link field in *Global → Buttons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: global.buttons[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button style field in *Global → Buttons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: primary
   * - **API ID Path**: global.buttons[].button_style
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_style: prismic.SelectField<"primary" | "secondary", "filled">;
}

/**
 * Content for Global documents
 */
interface GlobalDocumentData {
  /**
   * Image field in *Global*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: global.image
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Notice field in *Global*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global.notice
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  notice: prismic.KeyTextField
  /**
   * Navigation image field in *Global*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: global.navigation_image
   * - **Tab**: Navigation
   * - **Documentation**: https://prismic.io/docs/field#image
   */;
  navigation_image: prismic.ImageField<never>;

  /**
   * Buttons field in *Global*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: global.buttons[]
   * - **Tab**: Navigation
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  buttons: prismic.GroupField<Simplify<GlobalDocumentDataButtonsItem>>;

  /**
   * Background color field in *Global*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: global.background_color
   * - **Tab**: Navigation
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;
}

/**
 * Global document from Prismic
 *
 * - **API ID**: `global`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalDocumentData>,
    "global",
    Lang
  >;

type HomeDocumentDataSlicesSlice = FormSlice | TextSplashSlice | GridListSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Heading field in *home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  meta_description: prismic.RichTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *settings → Colors*
 */
export interface SettingsDocumentDataColorsItem {
  /**
   * Primary field in *settings → Colors*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.colors[].primary
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  primary: prismic.ColorField;

  /**
   * Secondary field in *settings → Colors*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.colors[].secondary
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  secondary: prismic.ColorField;

  /**
   * Alternate field in *settings → Colors*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.colors[].alternate
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  alternate: prismic.ColorField;
}

/**
 * Content for settings documents
 */
interface SettingsDocumentData {
  /**
   * Colors field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.colors[]
   * - **Tab**: Theme
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  colors: prismic.GroupField<Simplify<SettingsDocumentDataColorsItem>>;
}

/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = GlobalDocument | HomeDocument | SettingsDocument;

/**
 * Primary content in *Form → Primary*
 */
export interface FormSliceDefaultPrimary {
  /**
   * Heading field in *Form → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: form.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Primary content in *Form → Items*
 */
export interface FormSliceDefaultItem {
  /**
   * Type field in *Form → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Text
   * - **API ID Path**: form.items[].type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<
    "Text" | "Text area" | "Email" | "Submit" | "Combo box" | "Paragraph",
    "filled"
  >;

  /**
   * text field in *Form → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: form.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Form Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FormSliceDefaultPrimary>,
  Simplify<FormSliceDefaultItem>
>;

/**
 * Slice variation for *Form*
 */
type FormSliceVariation = FormSliceDefault;

/**
 * Form Shared Slice
 *
 * - **API ID**: `form`
 * - **Description**: Form
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormSlice = prismic.SharedSlice<"form", FormSliceVariation>;

/**
 * Default variation for GridList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *GridList*
 */
type GridListSliceVariation = GridListSliceDefault;

/**
 * GridList Shared Slice
 *
 * - **API ID**: `grid_list`
 * - **Description**: GridList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridListSlice = prismic.SharedSlice<
  "grid_list",
  GridListSliceVariation
>;

/**
 * Primary content in *TextSplash → Primary*
 */
export interface TextSplashSliceDefaultPrimary {
  /**
   * Heading field in *TextSplash → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Sub heading field in *TextSplash → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_heading: prismic.RichTextField;

  /**
   * Page headline field in *TextSplash → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: text_splash.primary.page_headline
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  page_headline: prismic.BooleanField;

  /**
   * Background color field in *TextSplash → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * image field in *TextSplash → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Gradient color top field in *TextSplash → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: none
   * - **API ID Path**: text_splash.primary.gradient_color_top
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  gradient_color_top: prismic.SelectField<
    | "none"
    | "primary-to-white"
    | "secondary-to-white"
    | "white-to-primary"
    | "white-to-secondary",
    "filled"
  >;

  /**
   * Gradient color bottom field in *TextSplash → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: none
   * - **API ID Path**: text_splash.primary.gradient_color_bottom
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  gradient_color_bottom: prismic.SelectField<
    | "none"
    | "primary-to-white"
    | "secondary-to-white"
    | "white-to-primary"
    | "white-to-secondary",
    "filled"
  >;
}

/**
 * Primary content in *TextSplash → Items*
 */
export interface TextSplashSliceDefaultItem {
  /**
   * Button link field in *TextSplash → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button text field in *TextSplash → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.items[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button type field in *TextSplash → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.items[].button_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_type: prismic.SelectField<"1" | "2">;
}

/**
 * Default variation for TextSplash Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSplashSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSplashSliceDefaultPrimary>,
  Simplify<TextSplashSliceDefaultItem>
>;

/**
 * Primary content in *TextSplash → Primary*
 */
export interface TextSplashSliceTextSplashWithBodyPrimary {
  /**
   * Heading field in *TextSplash → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Sub heading field in *TextSplash → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_heading: prismic.RichTextField;

  /**
   * Page headline field in *TextSplash → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: text_splash.primary.page_headline
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  page_headline: prismic.BooleanField;

  /**
   * Background color field in *TextSplash → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * image field in *TextSplash → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Gradient color top field in *TextSplash → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: none
   * - **API ID Path**: text_splash.primary.gradient_color_top
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  gradient_color_top: prismic.SelectField<
    | "none"
    | "primary-to-white"
    | "secondary-to-white"
    | "white-to-primary"
    | "white-to-secondary",
    "filled"
  >;

  /**
   * Gradient color bottom field in *TextSplash → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: none
   * - **API ID Path**: text_splash.primary.gradient_color_bottom
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  gradient_color_bottom: prismic.SelectField<
    | "none"
    | "primary-to-white"
    | "secondary-to-white"
    | "white-to-primary"
    | "white-to-secondary",
    "filled"
  >;

  /**
   * Body field in *TextSplash → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Direction field in *TextSplash → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: default
   * - **API ID Path**: text_splash.primary.direction
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  direction: prismic.SelectField<"default" | "reverse", "filled">;
}

/**
 * Primary content in *TextSplash → Items*
 */
export interface TextSplashSliceTextSplashWithBodyItem {
  /**
   * Button link field in *TextSplash → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button text field in *TextSplash → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_splash.items[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button type field in *TextSplash → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: default
   * - **API ID Path**: text_splash.items[].button_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_type: prismic.SelectField<
    "default" | "primary" | "secondary" | "alternate",
    "filled"
  >;
}

/**
 * TextSplashWithBody variation for TextSplash Slice
 *
 * - **API ID**: `textSplashWithBody`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSplashSliceTextSplashWithBody = prismic.SharedSliceVariation<
  "textSplashWithBody",
  Simplify<TextSplashSliceTextSplashWithBodyPrimary>,
  Simplify<TextSplashSliceTextSplashWithBodyItem>
>;

/**
 * Slice variation for *TextSplash*
 */
type TextSplashSliceVariation =
  | TextSplashSliceDefault
  | TextSplashSliceTextSplashWithBody;

/**
 * TextSplash Shared Slice
 *
 * - **API ID**: `text_splash`
 * - **Description**: TextSplash
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSplashSlice = prismic.SharedSlice<
  "text_splash",
  TextSplashSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalDocument,
      GlobalDocumentData,
      GlobalDocumentDataButtonsItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataColorsItem,
      AllDocumentTypes,
      FormSlice,
      FormSliceDefaultPrimary,
      FormSliceDefaultItem,
      FormSliceVariation,
      FormSliceDefault,
      GridListSlice,
      GridListSliceVariation,
      GridListSliceDefault,
      TextSplashSlice,
      TextSplashSliceDefaultPrimary,
      TextSplashSliceDefaultItem,
      TextSplashSliceTextSplashWithBodyPrimary,
      TextSplashSliceTextSplashWithBodyItem,
      TextSplashSliceVariation,
      TextSplashSliceDefault,
      TextSplashSliceTextSplashWithBody,
    };
  }
}
