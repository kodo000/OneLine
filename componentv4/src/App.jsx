import OneLine from './assets/components/Input/OneLine.jsx'

function App() {

  var myArray = ['Name', 'National Identification Number', 'Residence Address', 'Personal Phone Number', 'Email'];

  return (
    <>
      <h1>Welcome to TechFix Sandy!!</h1>
      <br /> <br />
      <OneLine myArray={myArray} />
    </>
  )
}

export default App


{/* regex pattern for name
  ^[a-zA-ZäöüÄÖÜßñÑàèéìíòóùúÀÈÉÌÍÒÓÙÚ가-힣ㄱ-ㅎㅏ-ㅣ一-龥ぁ-んァ-ン]+$

  The previous regex pattern should cover characters from Japanese, Korean, German, Chinese, English, and Spanish. Here’s a recap of what it includes:

  English Letters: a-zA-Z
  German Letters: äöüÄÖÜß
  Spanish Letters: ñÑ and accented vowels àèéìíòóùúÀÈÉÌÍÒÓÙÚ
  Korean Characters: 가-힣 (Hangul syllables) and ㄱ-ㅎㅏ-ㅣ (Hangul jamo)
  Chinese Characters: 一-龥 (Common Kanji)
  Japanese Characters:
  Hiragana: ぁ-ん
  Katakana: ァ-ン


  regex pattern for name
  ^[a-zA-Z0-9._%+-]+@(gmail\.com|googlemail\.com|outlook\.com|hotmail\.com|live\.com|icloud\.com|me\.com|mac\.com)$

  ^[a-zA-Z0-9._%+-]+: Validates the local part of the email (before the @), allowing alphanumeric characters and special symbols (._%+-).
  @(gmail\.com|googlemail\.com|outlook\.com|hotmail\.com|live\.com|icloud\.com|me\.com|mac\.com)$: This ensures that the domain part is one of the following:
  Google domains: gmail.com, googlemail.com
  Microsoft domains: outlook.com, hotmail.com, live.com
  Apple domains: icloud.com, me.com, mac.com



  */}
