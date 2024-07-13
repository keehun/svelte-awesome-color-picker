import { SvelteComponentTyped } from "svelte";
import { type RgbaColor, type HsvaColor, type Colord } from 'colord';
import type { A11yColor, Components } from '../type/types';
import { type TextsPartial, type A11yTextsPartial } from '../utils/texts';
declare const __propDef: {
    props: {
        /** customize the ColorPicker component parts. Can be used to display a Chrome variant or an Accessibility Notice */ components?: Partial<Components>;
        /** input label, hidden when the ColorPicker is always shown (prop `isDialog={false}`) */ label?: string;
        /** input name, useful in a native form */ name?: string | undefined;
        /** if set to true, the color picker becomes nullable (rgb, hsv and hex set to undefined) */ nullable?: boolean;
        /** rgb color */ rgb?: RgbaColor | undefined;
        /** hsv color */ hsv?: HsvaColor | undefined;
        /** hex color */ hex?: string | undefined;
        /** Colord color */ color?: Colord | undefined;
        /** indicator whether the selected color is light or dark */ isDark?: boolean;
        /** if set to false, disables the alpha channel */ isAlpha?: boolean;
        /** if set to false, the input and the label will not be displayed and the ColorPicker will always be visible */ isDialog?: boolean;
        /** indicator of the popup state */ isOpen?: boolean;
        /** if set to false, hide the hex, rgb and hsv text inputs */ isTextInput?: boolean;
        /** configure which hex, rgb and hsv inputs will be visible and in which order. If overridden, it is necessary to provide at least one value */ textInputModes?: Array<"hex" | "rgb" | "hsv">;
        /** If set to "horizontal", the hue and alpha sliders will be displayed horizontally. It is necessary to set this props to "horizontal" for the ChromeVariant */ sliderDirection?: "horizontal" | "vertical";
        /** If set to true, it will not be possible to close the color picker by clicking outside */ disableCloseClickOutside?: boolean;
        /** used with the A11yVariant. Define the accessibility examples in the color picker */ a11yColors?: Array<A11yColor>;
        /** required WCAG contrast level */ a11yLevel?: "AA" | "AAA";
        /** all translation tokens used in the library; can be partially overridden; see [full object type](https://github.com/Ennoriel/svelte-awesome-color-picker/blob/master/src/lib/utils/texts.ts) */ texts?: TextsPartial | undefined;
        /** all a11y translation tokens used in the library; override with translations if necessary; see [full object type](https://github.com/Ennoriel/svelte-awesome-color-picker/blob/master/src/lib/utils/texts.ts) */ a11yTexts?: A11yTextsPartial | undefined;
    };
    events: {
        input: CustomEvent<{
            hsv: HsvaColor | undefined;
            rgb: RgbaColor | undefined;
            hex: string | undefined;
            color: Colord | undefined;
        }>;
        blur: CustomEvent<{}>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ColorPickerProps = typeof __propDef.props;
export type ColorPickerEvents = typeof __propDef.events;
export type ColorPickerSlots = typeof __propDef.slots;
/**
 * Color Picker Component — default export of the library
 *
 * **Import**
 * ```js
 * import ColorPicker from 'svelte-awesome-color-picker';
 * ```
 *
 * **Use**
 * ```svelte
 * <ColorPicker bind:hex />
 * ```
 *
 * **Props**
 * @prop components: Partial&lt;Components&gt; = {} — customize the ColorPicker component parts. Can be used to display a Chrome variant or an Accessibility Notice
 * @prop label: string = 'Choose a color' — input label, hidden when the ColorPicker is always shown (prop `isDialog={false}`)
 * @prop name: string | undefined = undefined — input name, useful in a native form
 * @prop nullable: boolean = false — if set to true, the color picker becomes nullable (rgb, hsv and hex set to undefined)
 * @prop rgb: RgbaColor | undefined = nullable ? undefined : { r: 255, g: 0, b: 0, a: 1 } — rgb color
 * @prop hsv: HsvaColor | undefined = nullable ? undefined : { h: 0, s: 100, v: 100, a: 1 } — hsv color
 * @prop hex: string | undefined = nullable ? undefined : '#ff0000' — hex color
 * @prop color: Colord | undefined = undefined — Colord color
 * @prop isDark: boolean = false — indicator whether the selected color is light or dark
 * @prop isAlpha: boolean = true — if set to false, disables the alpha channel
 * @prop isDialog: boolean = true — if set to false, the input and the label will not be displayed and the ColorPicker will always be visible
 * @prop isOpen: boolean = !isDialog — indicator of the popup state
 * @prop isTextInput: boolean = true — if set to false, hide the hex, rgb and hsv text inputs
 * @prop textInputModes: Array&lt;'hex' | 'rgb' | 'hsv'&gt; = ['hex', 'rgb', 'hsv'] — configure which hex, rgb and hsv inputs will be visible and in which order. If overridden, it is necessary to provide at least one value
 * @prop sliderDirection: 'horizontal' | 'vertical' = 'vertical' — If set to "horizontal", the hue and alpha sliders will be displayed horizontally. It is necessary to set this props to "horizontal" for the ChromeVariant
 * @prop disableCloseClickOutside: boolean = false — If set to true, it will not be possible to close the color picker by clicking outside
 * @prop a11yColors: Array&lt;A11yColor&gt; = [{ bgHex: '#ffffff' }] — used with the A11yVariant. Define the accessibility examples in the color picker
 * @prop a11yLevel: 'AA' | 'AAA' = 'AA' — required WCAG contrast level
 * @prop texts: TextsPartial | undefined = undefined — all translation tokens used in the library; can be partially overridden; see [full object type](https://github.com/Ennoriel/svelte-awesome-color-picker/blob/master/src/lib/utils/texts.ts)
 * @prop a11yTexts: A11yTextsPartial | undefined = undefined — all a11y translation tokens used in the library; override with translations if necessary; see [full object type](https://github.com/Ennoriel/svelte-awesome-color-picker/blob/master/src/lib/utils/texts.ts)
 */
export default class ColorPicker extends SvelteComponentTyped<ColorPickerProps, ColorPickerEvents, ColorPickerSlots> {
}
export {};
