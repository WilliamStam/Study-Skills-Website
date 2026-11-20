import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faBrain,
    faGraduationCap,
    faLocationDot,
    faMinus,
    faPaintbrush,
    faPencil,
    faPhone,
    faPlus,
    faQuoteLeft,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
    faClock,
    faEnvelope,
    faFaceGrinBeam,
    faLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import {faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons";

/**
 * Only the icons the app uses are registered, so the rest of Font Awesome is tree-shaken out of
 * the bundle.
 *
 * Using a new icon (`icon="fa-solid fa-xyz"`)? Add it here too, otherwise it renders as nothing
 * (the dev console logs "Could not find one or more icon(s)").
 */
library.add(
    // fa-solid
    faBrain,
    faGraduationCap,
    faLocationDot,
    faMinus,
    faPaintbrush,
    faPencil,
    faPhone,
    faPlus,
    faQuoteLeft,
    faTrophy,
    // fa-regular
    faClock,
    faEnvelope,
    faFaceGrinBeam,
    faLightbulb,
    // fa-brands
    faFacebookF,
    faInstagram,
);
