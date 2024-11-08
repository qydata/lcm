import type {FC} from "react";
import {useState} from "react";

interface ViewReportsProps {
    id: string;
}

const ViewReports: FC<ViewReportsProps> = ({id}, element: JSX.Element = <>
</>) => {
    const [showReportsModal, setShowReportsModal] = useState(false);
    return element;
};

export default ViewReports;
