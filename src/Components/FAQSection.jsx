

const FAQSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 pt-5 md:pt-28 pb-5 md:pb-16  justify-between">
      {/* Image Section */}
      <div className="">
        <img
          src="https://i.ibb.co.com/6DPnrKd/4990133.jpg"
          alt="FAQ Illustration"
          className="rounded-lg  w-full "
        />
      </div>

      {/* Accordion Section */}
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Frequently Asked Questions</h2>
        <div className="collapse collapse-arrow bg-base-100 rounded-box shadow mb-4">
          <input type="checkbox" defaultChecked/>
          <div className="collapse-title text-lg font-medium">What services does your platform offer?</div>
          <div className="collapse-content">
            <p>
              Our platform provides career counseling, resume building, interview coaching, career transition support, job market insights, and skill assessments.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 rounded-box shadow mb-4">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">Are the sessions conducted online or offline?</div>
          <div className="collapse-content">
            <p>
              We offer both online and offline sessions to cater to your convenience and preference, depending on the service selected.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 rounded-box shadow mb-4">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">How do I schedule a session?</div>
          <div className="collapse-content">
            <p>
              Scheduling a session is simple! Select the desired service, choose an available time slot, and confirm your appointment.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 rounded-box shadow">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">What payment methods do you accept?</div>
          <div className="collapse-content">
            <p>
              We accept a variety of payment methods, including credit/debit cards, digital wallets, and direct bank transfers for your convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
