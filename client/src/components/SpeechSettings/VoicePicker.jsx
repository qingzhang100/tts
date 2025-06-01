function GenderSelector({ gender, setGender }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Choose gender
      </label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border rounded px-3 py-2 w-full text-gray-700"
      >
        <option value="FEMALE">Female</option>
        <option value="MALE">Male</option>
      </select>
    </div>
  );
}

export default GenderSelector;
