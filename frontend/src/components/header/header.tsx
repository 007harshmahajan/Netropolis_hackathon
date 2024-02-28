import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderProfileSection } from "./header-profile-section.tsx";
import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import { IconLabelButton } from "../buttons/icon-label-button.tsx";
import { useSelector } from "react-redux";

export function Header() {
  const Links = [
    { name: "Home", url: "/" },
    { name: "Activity", url: "/activity" },
    { name: "Profile", url: "/profile" },
    { name: "Tasks", url: "/tasks" },
  ];
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="flex h-16 p-5 items-center justify-between text-sm font-medium text-neutral-10 border-b border-neutral-70">
      <span className="prose-t2-bold">Netropolis</span>
      <ul className="flex gap-8 items-center">
        {Links.map((link, index) => (
          <Fragment key={index}>
            <Link
              to={link.url}
              key={link.name}
              className={classNames(
                "flex items-center w-full text-neutral-30 prose-b2-medium cursor-pointer rounded-3xl group hover:text-neutral-5",
                {
                  "text-primary-10 font-semibold hover:text-primary-10":
                    activeLink === link.url,
                }
              )}
            >
              {link.name}
            </Link>
            {index !== Links.length - 1 && (
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        {!isAuthenticated ? (
          <>
            <IconLabelButton
              label="Sign In"
              className="whitespace-nowrap"
              onClick={() => navigate("/auth/login")}
            />
            <IconLabelButton
              label="Sign Up"
              variant="tertiary"
              className="whitespace-nowrap"
              onClick={() => navigate("/auth/register")}
            />
          </>
        ) : (
          <HeaderProfileSection />
        )}
      </div>
    </div>
  );
}
