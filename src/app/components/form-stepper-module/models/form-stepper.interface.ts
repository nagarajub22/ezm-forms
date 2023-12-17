import { QueryList } from "@angular/core";

/**
 * IFormStepper - Holds the form inputs to allow navigation
 */
export interface IFormStepper {
    title: string;
    steps: QueryList<IFormStep>;
    onSubmit: () => void;
}

export interface IFormStep {
    /**
     * Label to identify this step
     */
    title: string;
    /**
     * Index of the step
     */
    index: number;
    /**
     * Indicates the step is completed or not
     */
    completed?: boolean;
    /**
     * Indicates the step can be editable or not
     */
    editable?: boolean;
    /**
     * Indicates the step can be optional
     */
    optional?: boolean;
    /**
     * Stores the list of errors occured in this step
     */
    error?: IFormStepError[];
}

export interface IFormStepError {
    message: string;
}