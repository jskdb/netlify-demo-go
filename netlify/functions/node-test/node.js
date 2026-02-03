

exports.handler = async (event, context) => {
  // export async function handler(event, context) {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ imageURL }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};