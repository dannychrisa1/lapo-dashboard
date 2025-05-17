import Card from "./Card"

const CardSection = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
            <Card>
                Manage Card
            </Card>
            <Card>
                Issue Instant Card
            </Card>
            <Card>
                Issue Personalized Card
            </Card>
            <Card>
                Review Card Requests
            </Card>
        </div>
    )
}

export default CardSection