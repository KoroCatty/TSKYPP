const Forms = () => {
  return (
    <>
      <section>
        <form>
          {/* Name */}
          <label htmlFor="inputName" className="inputLabel">
            Name:
          </label>
          <input type="text" className="inputNam" />

          {/* Email */}
          <label htmlFor="inputEmail" className="inputLabel">
            Email:
          </label>
          <input type="email" className="inputEmail" />

          {/* Subject */}
          <label htmlFor="inputSub" className="inputLabel">
            Subject:
          </label>
          <input type="text" className="inputSub" />

          {/* Message */}
          <label htmlFor="inputMes" className="inputLabel">
            Message:
          </label>
          <textarea></textarea>

          {/* Submit Button  */}
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default Forms;
