import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useState } from "react";

let buttons = ["c", "/", "x", "-"];

let buttons2 = ["8", "9", "<", "^"];

let buttons3 = ["5", "6", "7", "+"];

let buttons4 = ["1", "2", "3", "4"];

let buttons5 = ["%", "0", ".", "="];

export default function App() {

	let [numberText, changeNumber] = useState("");

	// c	/	x	-
	return (
		<View style={styles.container}>
			<Text style={styles.textInputStyle}> {numberText} </Text>

			<SafeAreaView style={styles.rowButtons}>
			{
			buttons.map((element) =>
			  <TouchableOpacity
				onPress={
					() => element === "c" ? changeNumber("") : (
						element === "/" ? ( numberText.endsWith(".") ||
							numberText.endsWith("/") ||
							numberText.endsWith("+") ||
							numberText.endsWith("-") ||
							numberText.endsWith("%") ||
							numberText.endsWith("x") ||
							numberText === "" ? changeNumber(numberText) : changeNumber(numberText += "/") ) :
						element === "x" ? ( numberText.endsWith(".") ||
							numberText.endsWith("/") ||
							numberText.endsWith("+") ||
							numberText.endsWith("-") ||
							numberText.endsWith("%") ||
							numberText.endsWith("x") ||
							numberText.endsWith("^") ||
							numberText === "" ? changeNumber(numberText) : changeNumber(numberText += "x") ) :
						element === "-" ? ( numberText.endsWith(".") ||
							numberText.endsWith("/") ||
							numberText.endsWith("+") ||
							numberText.endsWith("-") ||
							numberText.endsWith("%") ||
							numberText.endsWith("x") ||
							numberText.endsWith("^") ||
						  numberText === "" ? changeNumber(numberText) : changeNumber(numberText += "-") ) : console.log("not c or / or x or -")
						)
				}
				key={element+element}
				style={styles.buttonStyle}>
			  <Text style={styles.buttonText}> {element} </Text>
			  </TouchableOpacity>
			)
			}
			</SafeAreaView>

			<SafeAreaView style={styles.rowButtons}>
			{
				buttons2.map((element) =>
					<TouchableOpacity key={element+element} style={styles.buttonStyle}
					onPress={
						() => element === "8" ? (changeNumber(numberText += "8")) :
						element === "9" ? (changeNumber(numberText += "9")) :
						element === "<" ? (changeNumber(numberText.substring(0, numberText.length - 1))) :
						element === "^" ? (
							numberText.endsWith("/") ||
							numberText.endsWith("+") ||
							numberText.endsWith("-") ||
							numberText.endsWith("%") ||
							numberText.endsWith("x") ||
							numberText.endsWith("^") ||
							numberText === "" ? changeNumber(numberText) : changeNumber(numberText += "^")
						) : console.log("not this")
					}
					>
						<Text style={styles.buttonText}> {element} </Text>
					</TouchableOpacity>
				)
			}
			</SafeAreaView>

			<SafeAreaView style={styles.rowButtons}>
				{
					buttons3.map((element) =>
						<TouchableOpacity
							onPress={
								() => element === "5" ? (changeNumber(numberText += "5")) :
								element === "6" ? (changeNumber(numberText += "6")) :
								element === "7" ? (changeNumber(numberText += "7")) :
								element === "+" ? (
									numberText.endsWith("/") ||
									numberText.endsWith("+") ||
									numberText.endsWith("-") ||
									numberText.endsWith("%") ||
									numberText.endsWith("x") ||
									numberText.endsWith("^") ||
									numberText === "" ? changeNumber(numberText) : changeNumber(numberText += "+")
								) : console.log("not this")
							}
							key={element+element}
							style={styles.buttonStyle}>
							<Text style={styles.buttonText}> {element} </Text>
						</TouchableOpacity>
					)
				}
			</SafeAreaView>

			<SafeAreaView style={styles.rowButtons}>
			   {
					 buttons4.map((element) =>
					 <TouchableOpacity
						onPress={
							() => element === "1" ? (changeNumber(numberText += "1")) :
							element === "2" ? (changeNumber(numberText += "2")) :
							element === "3" ? (changeNumber(numberText += "3")) :
							element === "4" ? (changeNumber(numberText += "4")) : console.log("not this")
						}

						key={element+element}
						style={styles.buttonStyle}>
			      <Text style={styles.buttonText}> {element} </Text>
			   		</TouchableOpacity>
			    )
			   }
			</SafeAreaView>

			<SafeAreaView style={styles.rowButtons}>
				{
					buttons5.map((element) =>
					  <TouchableOpacity key={element+element} style={styles.buttonStyle} onPress={
							() => element === "0" ? (changeNumber(numberText += "0")) :
							element === "%" ? (
								numberText.endsWith("/") ||
								numberText.endsWith("+") ||
								numberText.endsWith("-") ||
								numberText.endsWith("%") ||
								numberText.endsWith("x") ||
								numberText.endsWith("^") ||
								numberText === "" ? changeNumber(numberText) : changeNumber(numberText += "%")
							) :
							element === "." ? (
								numberText.endsWith("/") ||
								numberText.endsWith("+") ||
								numberText.endsWith("-") ||
								numberText.endsWith("%") ||
								numberText.endsWith("x") ||
								numberText.endsWith("^") ||
								numberText === "" ? changeNumber(numberText) : changeNumber(numberText += ".")
							) :
							element === "=" ? (
								numberText.endsWith("/") ||
								numberText.endsWith("+") ||
								numberText.endsWith("-") ||
								numberText.endsWith("%") ||
								numberText.endsWith("x") ||
								numberText.endsWith("^") ||
								numberText === "" ? changeNumber(numberText) : changeNumber(new String(eval(numberText.replace("x", "*"))))
							) : console.log("not this!")
						}>

							<Text style={styles.buttonText}> {element} </Text>
					  </TouchableOpacity>
					)
				}
			</SafeAreaView>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: "column",
	},

	buttonStyle: {
		backgroundColor: "rgba(240, 100, 101, 1)",
		flex: 1,
		flexDirection: "column",
		borderColor: "black",
		borderWidth: 1,
		borderStyle: "solid",
		alignItems: "center",
		justifyContent: "center",
		borderRightColor: "rgba(255, 255, 255, 0.3)",
		borderLeftColor: "rgba(255, 255, 255, 0.3)",
		elevation: 20,
	},

	rowButtons: {
		flex: 1,
		flexDirection: "row",
		elevation: 20,
	},

	buttonText: {
		fontSize: 35,
		fontFamily: "sans-serif",
		fontWeight: "bold",
		color: "rgba(255, 255, 255, 0.8)",
	},

	textInputStyle: {
		fontSize: 40,
		fontFamily: "sans-serif",
		fontWeight: "bold",
		color: "white",
		backgroundColor: "black",
		width: "100%",
		height: "30%",
		elevation: 25,
		textAlign: "left",
		marginTop: 10,
		textAlignVertical: "top",
		flexWrap: "wrap",
	},
});
