import { toast } from "sonner";

export interface ApiError {
    data?: {
        message?: string;
        errors?: Record<string, string[]>;
    };
    status?: number;
    error?: string;
}

export const handleApiError = (error: ApiError | any) => {
    console.error("API Error:", error);

    // Handle network errors
    if (!error?.data && error?.error) {
        toast.error("Network error. Please check your connection.");
        return;
    }

    // Handle server errors
    if (error?.status >= 500) {
        toast.error("Server error. Please try again later.");
        return;
    }

    // Handle validation errors
    if (error?.data?.errors) {
        const errors = error.data.errors;
        const firstError = Object.values(errors)[0] as string[];
        toast.error(firstError[0] || "Validation error occurred.");
        return;
    }

    // Handle specific error messages
    const message = error?.data?.message || error?.message || "An unexpected error occurred.";
    toast.error(message);
};

export const showSuccessMessage = (message: string) => {
    toast.success(message);
};

export const showInfoMessage = (message: string) => {
    toast.info(message);
};

export const showWarningMessage = (message: string) => {
    toast.warning(message);
};