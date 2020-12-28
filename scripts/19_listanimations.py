import anki_vector

def main():
    args = anki_vector.util.parse_command_args()
    fs = open("skills.txt", "w+")
    with anki_vector.AsyncRobot() as robot:
        anim_request = robot.anim.load_animation_list()
        anim_request.result()
        anim_names = robot.anim.anim_list
        for anim_name in anim_names:
            print(anim_name)
            fs.write("%s\r\n" % anim_name)


if __name__ == "__main__":
    main()