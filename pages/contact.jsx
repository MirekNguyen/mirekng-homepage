import styles from "../styles/Home.module.css";
import AnimatedPage from "../components/AnimatedPage";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  async function onSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    try {
      setError(null);
      setSuccess(null);
      if (!process.env.NEXT_PUBLIC_MAILER_API) {
        throw new Error("Mailer API endpoint not set");
      }
      const formData = new FormData(event.currentTarget);
      const response = await fetch(process.env.NEXT_PUBLIC_MAILER_API, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
      const data = await response.json();
      console.log(response);
      if (data.status !== "success") {
        throw new Error(data.message || "An unexpected error occurred");
      }
      setSuccess(data.message || "Data fetched successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <AnimatedPage>
      <main className={` ${styles.main} ${styles.center} font-montserrat `}>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {success && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success: </strong>
            <span className="block sm:inline">{success}</span>
          </div>
        )}
        <div className="text-center w-1/2 min-w-320 max-w-xl">
          <h1 className="text-3xl">Contact form</h1>
          <form method="POST" onSubmit={onSubmit}>
            <label htmlFor="text">Subject</label>
            <br />
            <input
              className="py-3 px-1 w-11/12 lg:w-2/3 border-2 border-black dark:bg-slate-100 dark:text-black"
              name="subject"
              type="text"
              placeholder="Subject..."
              required
            ></input>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="py-3 px-1 w-11/12 lg:w-2/3 border-2 border-black dark:bg-slate-100 dark:text-black"
              name="email"
              type="email"
              placeholder="Your email..."
              required
            ></input>
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              className="py-3 px-1 w-11/12 lg:w-2/3 h-52 border-2 border-black dark:bg-slate-100 dark:text-black"
              name="message"
              placeholder="Lorem ipsum..."
              required
            ></textarea>
            <br />
            <button
              className="text-2xl text-white bg-red-400 rounded px-5 py-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
          <article className="flex-1"></article>
        </div>
      </main>
    </AnimatedPage>
  );
};
export default Contact;
