import { FaArrowLeft, FaFileContract } from "react-icons/fa";
import { Link } from "react-router-dom";

function TermsConditions() {
  return (
    <div className="termswrapper">
      <div className="pageContainer termsPad ">
        <div className="terms-top">
          <Link to={"/AccountPage"} className="link">
            <FaArrowLeft />
          </Link>
          <FaFileContract className="topIcon" />
          <div className="termstoptext">
            <h2>Terms of Service</h2>
            <p>Last Updated 16/02/2023</p>
          </div>
        </div>
        <div>
          <h3 className="terms-title">
            Terms and Condition for UNIPORT E-learning Appllication
          </h3>
          <p>
            Welcome to UNIPORT E-learning Appllication. By using this App, you
            agree to comply with and be bound by these terms and conditions.
          </p>
        </div>

        <div className="terms">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By using the App, you agree to these terms and any future updates or
            modifications. If you are accessing the App on behalf of an
            organization, you must have the authority to bind the organization
            to these terms
          </p>
        </div>

        <div className="terms">
          <h3>2. Privacy and Data Collection</h3>
          <p>
            a. We collect and store user data including email and name, to
            provide a personalized learning experience and communicate important
            information about the App.
          </p>

          <p>
            b. User data is stored securely and is never shared with third
            parties without your consent, except as required by law
          </p>

          <p>
            c. By using the App, you consent to the collection and use of your
            data as described in our Privacy Policy
          </p>
        </div>

        <div className="terms">
          <h3>3. User Conduct</h3>
          <p>
            a. Users are responsible for their conduct while using the App and
            must not engage in any ilega; harmful or abusive behavior
          </p>

          <p>
            b. Users may not use , reproduce , or distribute ny of our
            intellectual property without our explicit permission
          </p>
        </div>

        <div className="terms">
          <h3>4. Intellectual Property</h3>
          <p>
            a. All intellectual property rights in the App, including content,
            trademarks, and logos, belong to Texas Technologies. unless
            otherwise stated
          </p>

          <p>
            b. Users may not use, reproduce, or distribute any of our
            intellectual property without our explicit permission
          </p>
        </div>

        <div className="terms">
          <h3>5. Modifications and Termination</h3>
          <p>
            a. We reserve the right to modify or discontinue the App at any time
            without notice
          </p>
          <p>
            b. We may terminate or suspend user accounts that violate these
            terms or engage in harmful behavior{" "}
          </p>
        </div>

        <div className="terms">
          <h3>6. Dispute Resolution</h3>
          <p>
            Any dispute arising from the use of the App will be resolved in
            accordance with Nigerian laws and through negotiation or mediation.
          </p>
        </div>

        <div className="terms">
          <h3>7. Limitation of Liability</h3>
          <p>
            We are not liable for any damages, losses, or liabilities arising
            from the use of the App, including indirect or consequential damages
          </p>
        </div>

        <div className="terms">
          <h3>8. Contact Information</h3>
          <p>
            If you have any questions or concerns about these terms, please
            contact us at{" "}
            <a href="mailto:academysolution.ng@gmail.com">
              ordulucky330@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
