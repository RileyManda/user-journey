/**
 * This document defines TypeScript interfaces and types for a user journey application.
 *
 * 1. **UserDataInterface**: Represents user data 
 * including name, surname, and farmer details.
 * 2. **ContextProviderInterface**: Defines a context 
 * provider with methods and properties for fetching data, 
 * storing user data, error messages, and loading state.
 * 3. **PageTitleInterface**: Represents page title i
 * nformation with main title, subtitle, button text, and a button click callback.
 * 4. **ChecklistSectionInterface**: Represents 
 * a checklist section with summary indication, 
 * selected items, and a checkbox change callback.
 * 5. **ChecklistItemInterface**: Represents 
 * a checklist item with item details, last item 
 * indication, optional summary section, checked state, and an optional change callback.
 */
export interface UserDataInterface {
  name: string;
  surname: string;
  farmer: {
    farm: {
      name: string;
    };
  };
}

export interface ContextProviderInterface {
  fetchData: () => Promise<void>;
  data: UserDataInterface | null;
  error: string | null;
  loading: boolean;
}

export type PageTitleInterface = {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
};

export interface ChecklistSectionInterface {
  isSummary?: boolean;
  selectedItems: Record<string, string[]>;
  onCheckboxChange: (section: string, item: string) => void;
}

export interface ChecklistItemInterface {
  item: string;
  isLastItem: boolean;
  isSummary?: ChecklistSectionInterface;
  isChecked: boolean;
  onChange?: () => void;
}
