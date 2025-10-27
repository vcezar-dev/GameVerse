import { format, parseISO } from "date-fns";

export function formatDate(dateToFormat : string) {
    const dateString = dateToFormat;
    const date = parseISO(dateString);

    const formatted = format(date, "MMM d, yyyy");
    return formatted
};