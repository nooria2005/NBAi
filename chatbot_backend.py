from flask import Flask, request, jsonify
import openai

# Initialize Flask app
app = Flask(__name__)

# OpenAI API key
openai.api_key = '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'

@app.route('/chat', methods=['POST'])
def chat():
    # Get the user input from the request
    user_message = request.json.get('message')

    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    
    try:
        # Call the OpenAI API to generate a response
        response = openai.Completion.create(
            engine="text-davinci-003",  
            prompt=user_message,
            max_tokens=150,
            n=1,
            stop=None,
            temperature=0.7,
        )
        
        chatbot_reply = response.choices[0].text.strip()
        return jsonify({"response": chatbot_reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
