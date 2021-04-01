import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './Wallet.styles';
import { WalletMockData } from '../../Mocks/WalletMocks';
import dollarIcon from '../../assets/images/dollarIcon.png';
import rightIcon from '../../assets/images/rightArrow.png';
import DummyUser from '../../assets/images/dummyUser.jpg';
import MenuIcon from '../../assets/images/menu.png'

const getTotalAmount = (array) => {
    if (array.length === 0) return 0;
    let amount = 0;
    array.forEach(element => {
        console.log(element.amount)
        amount = parseInt(element.amount) + amount
    });
    return amount;
}
const handleTransactionPress = (url) => {
    Linking.openURL(url)
}

const WalletItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={()=>handleTransactionPress(item.receipt_url)} key={item.balanceTransactionId} style={styles.walletItemContainer}>
            <Image style={styles.imageIcon} source={DummyUser} />
            <View style={styles.walletTextContainer}>
                <Text style={styles.itemName}>{item.user.name}</Text>
                <Text style={styles.transactionText}>{`#${item.transactionId}`}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amountText}>{`$${item.amount}`}</Text>
            </View>

        </TouchableOpacity>
    )
}
const handleGetTransaction = (actions, userId) => {
    const data = {
        userId: userId
    };
    actions.user
        .getTransactions(data)
        .then(() => { })
        .catch((e) => console.log("err", e))
        .then(() => { });

}


const Wallet = ({ actions, user, userId, navigation, transactionData }) => {
    console.log("actions", actions)
    const [totalAmount, setTotalAmount] = useState(0);
    let userTransactions = [];

    userTransactions = transactionData ? transactionData : [];
    useEffect(() => {
        if (!transactionData) {
            handleGetTransaction(actions, userId)
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Image source={backIcon}/> */}
                <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.menuContainer}>
                    <Image resizeMode="contain" source={MenuIcon} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.headerText}>My Wallet</Text>
                <Text style={styles.subHeaderText}>{`${getTotalAmount(userTransactions)} RS`}</Text>
                <Text style={styles.subHeaderDetails}>Total Spent</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.cashContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageIconDollar} source={dollarIcon} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.cashHeaderText}>Payment Method</Text>
                            <View>
                                <Image source={rightIcon} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardContainerText}>Payment History</Text>
                    <ScrollView>
                        <View style={styles.walletContainer}>
                            {transactionData ?
                                transactionData.map((item, index) => <WalletItem key={index} item={item} />)
                                :
                                null
                            }
                        </View>
                    </ScrollView>

                </View>

            </View>
        </View>
    )
};

export default Wallet;