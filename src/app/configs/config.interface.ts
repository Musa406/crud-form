export interface Configs {
    label: string;
    name: string;
    isCrudButton: boolean;
    edit: EditConfig;
    list: ListConfig;
    detail: DetailConfig;
    leafOnlySelection: boolean;
  }
  
  interface EditConfig {
    type: string;
    col: string;
    readonly: boolean;
    validation: ValidationConfig[];
    cellTemplate: string;
    optionSource: string;
    defaultOptionLabel: string;
    multiple: boolean;
    actionName: string;
    refreshData: string;
  }
  
  interface ValidationConfig {
    tooltip: TooltipConfig;
    validators: ValidatorConfig[];
  }
  
  interface TooltipConfig {
    placement: string;
    animation: boolean;
    showAfterSubmit: boolean;
  
  }
  
  interface ValidatorConfig {
    name: string;
    message: string;
  }
  
  interface ListConfig {
    hidden: boolean;
    customButtons: string[];
    cellFilter: string;
  }
  
  interface DetailConfig {
    hidden: boolean;
    filter: FilterConfig;
  }
  
  interface FilterConfig {
    name: string;
    parameter: string;
  }