import type {FC} from "react";
import {useEffect} from "react";

const ServiceWorkerProvider: FC = () => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                    registration.unregister();
                }

            });
        }
    }, []);

    return null;
};

export default ServiceWorkerProvider;
