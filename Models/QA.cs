namespace faq_accordion_card.Models;

public class QA(string question, string answer)
{
  public string question = question;
  public string answer = answer;
  public bool state = false;
}
