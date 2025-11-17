export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-5">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-600 mb-8">
        Have any questions, feedback, or feature requests? Feel free to reach
        out!
      </p>

      <div className="space-y-4">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:utkarshshrivastava102002@gmail.com"
            className="text-blue-600 underline"
          >
            utkarshshrivastava102002@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Utkarsh102002"
            className="text-blue-600 underline"
          >
            github.com/Utkarsh102002
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/utkarsh-shrivastava-9a1b29225/"
            className="text-blue-600 underline"
          >
            linkedin.com/in/utkarsh-shrivastava
          </a>
        </p>
        <p>
          <strong>Portfolio:</strong>{" "}
          <a
            href="https://portfolio-liard-pi-27.vercel.app/"
            className="text-blue-600 underline"
          >
            https://portfolio-liard-pi-27.vercel.app/
          </a>
        </p>
      </div>
    </div>
  );
}
