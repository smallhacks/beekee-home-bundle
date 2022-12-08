var require = meteorInstall({"lib":{"i18n":{"en.i18n.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/i18n/en.i18n.json                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"error-message":"An error occurred : ","access-denied--page-title":"Access denied !","access-denied--login-needed":"You need to login first.","access-denied--login":"Log in","admin--page-title":"Administration","admin--spaces-list":"List of spaces","admin--spaces-title":"Title","admin--spaces-creation":"Date of creation","admin--spaces-owner":"Owner","admin--spaces-actions":"Actions","admin--spaces-open":"Open","admin--spaces-delete":"Delete","admin--users-list":"List of teacher accounts","admin--users-logins":"Login","admin--users-creation":"Date of creation","admin--users-last-connexion":"Last connection","admin--users-actions":"Actions","admin--users-change-password":"Change password","admin--users-delete":"Delete","admin--user-delete-message":"Delete this user ?","admin--user-delete-confirm-message":"The user has been deleted.","admin--change-password-message":"Enter a new password for the user:","admin--change-password-confirm-message":"The password has been changed.","layout--connection-status":"Disconnected","login--page-title":"Login","login--mail":"E-mail","login--password":"Password","login--send-mail-forgot-password-link":"Reset my password","login--button-submit":"Log in","login--register":"You need an account ?","login--register-contact-admin":"Please contact your Beekee Box administrator.","login--register-link":"Create an account","login--user-not-found":"Username does not exist.","login--incorrect-password":"Password does not match.","login--send-mail-forgot-password":"An email has been sent to % s with a link to reset your password.","login--send-mail-forgot-password-error":"An error has occurred. Please contact the administrator at : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Error sending an email to recover password : %s","logout--page-title":"Sign out","not-found--page-title":"Page not found","not-found--page-description":"Sorry, we can not find a page at this address.","not-found--go-back":"Return to home","privacy--page-title":"Privacy policy","privacy--content":"<h3> Teacher Account Information </h3> <p> When you create a teacher account, you must provide a valid email address and password. These details are not public and can be modified at any time. Beekee Live will not share this information with third parties. </p> <h3> Publications, photos, users </h3> <p> Beekee Live follows a strict data protection policy. The data published on Beekee Live are hosted on servers located in Switzerland. The Beekee Live platform is therefore subject to Swiss data protection law. Publications, photographs, user names and any other data published on the platform are the exclusive property of the user. At any time, a user may choose to permanently delete his/her data. In no event will Beekee Live transmit this data to third parties. </p> <h3> Intervention of a technician </h3> <p> On request of the user, a technician can access a space and consult the data stored on it in order to solve a technical problem. </p> <h3> Cookies </h3> <p> Like many websites, Beekee Live uses cookies to facilitate the use of the platform. The information contained in these cookies is not used by Beekee Live for any other purpose. </p>","register--page-title":"Create an account","register--mail":"E-mail","register--name":"Name","register--password":"Password","register--password-confirm":"Confirm password","register--password-dont-match":"Confirm password doesn't match.","register--terms":"By registering, you accept our <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">terms and conditions</a>.<br>Your e-mail address will not be disclosed to third parties.","register--button-submit":"Sign up","register--mail-exist":"There already exists a user account with this email address.","register--mail-no-valid-message":"Please enter a valid email address.","register--mail-subject":"Your registration on Beekee Live","register--mail-content":"<h2>Welcome to <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h2><h3>We’re glad you’re here. Start teaching today by creating your first Beekee Live space!</h3><p><b>Tip</b> : Did you know that you can use Beekee Live on computer, smartphone or tablet without the need of installing an app?</p><p>The <a href=\"https://www.beekee.ch\">Beekee Team</a></p>","reset-password--page-title":"Reset your password","reset-password--new-password":"New password","reset-password--button-submit":"Save","register--password-changed-message":"The password has been changed.","space-edit-categories--page-title":"Manage categories","space-edit-categories--page-description":"The categories are used to classify posts.<br />Unlike tags, categories are defined in advance by the teacher.","space-edit-categories--confirm-delete":"Delete category","space-edit--button-submit-add-category":"Add","space-edit-categories--edit-category":"Edit category","space-edit--page-title":"Settings","space-edit--subtitle-general":"General","space-edit--list-title-change-code":"Change the access code","space-edit--description-change-code":"Share this code with your students so they can join this space.","space-edit--list-title-rename-space":"Rename this space","space-edit--list-title-delete-space":"Delete this space","space-edit--list-title-content":"Content","space-edit--list-title-flow":"Continuous Flow","space-edit--description-flow":"By enabling Continuous Flow, new publications are displayed in real time.","space-edit--list-title-categories":"Manage categories","space-edit--list-title-comments":"Allow comments","space-edit--subtitle-users":"Users","space-edit--list-title-users":"Manage authors","space-edit--list-title-free-users":"Free authors","space-edit--description-free-users":"By activating \"Free authors\", users are able to enter their username when they first log in. Otherwise, they will choose from an editable list under \"Manage authors\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Authors can edit their own publications","space-edit--select-permissions-all":"Authors can edit all publications","space-edit--select-permissions-none":"Nobody can add or edit publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Update the Box","space-edit--list-title-ip":"IP address :","space-edit--list-title-sync":"Synchronize with the cloud","space-edit--description-sync":"Connect the beekee box using an ethernet cable to sync its content with the cloud (www.beekee.ch). This may take several minutes.","space-edit--subtitle-account":"Your account","space-edit--description-change-password":"Change your account password.","space-edit--change-code-message":"Change the access code","space-edit--change-code-confirm-message":"The access code has been changed.","space-edit--change-code-already-used-message":"This code is already assigned to another space.","space-edit--rename-space-message":"Rename this space","space-edit--rename-space-confirm-message":"This space is now called","space-edit--delete-space-message":"Permanently delete this space and its contents ?","space-edit--delete-space-confirm-message":"The space has been removed.","space-edit--sync-login-message":"To synchronize this space with the cloud, you must have an account on www.beekee.ch.\nIf this is the case, enter the username linked to your account :","space-edit--sync-error-message":"A problem has occurred. Check that the box is connected to the internet and try again.","space-edit--update-message":"Updating of the box may make the platform inaccessible for several minutes.\nDo you want to continue ?","space-edit--update-waiting-message":"The box will be updated, please wait...","space-edit--no-ip":"No IP address","space-edit--not-connected":"Not connected","space-edit--module-resources":"Distribute files to your learners","space-edit--permissions-public-space":"Allows anyone to access the contents and interact within this Space without needing an Access Code","space-edit--permissions-add-categories":"Users can add categories","space-edit--permissions-add-posts":"Users can add posts","space-edit-authors---page-title":"Manage authors","space-edit-authors---page-description":"Author names are used to identify publications.<br>For example, add the name of your students or the name of a group.","space-edit-authors---submit-button":"Add","space-edit-authors--delete-author-message":"Delete the author %s ?","space-edit-authors--edit-author-message":"Modify the author :","space-edit-authors--add-author-error-message":"There is already an author with this name.","index-student--title":"The platform to promote real-time collaboration","index-student--wrapper-text":"A private space to share photos and messages <br> with your students, colleagues or friends.","index-student--code":"Private space","index-student--code-input-placeholder":"Enter an access code","index-student--visited-title":"Recently visited :","index-student--delete-recent":"(delete)","index-student--public-spaces-title":"Public spaces","index-student--button-code-link":"Validate","index-student--space-doesnt-exist-message":"This space does not exist.\nMake sure to respect the upper and lower case.","index-student--create-your-space-1":"Have you tried","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" to promote real-time collaboration with your students?","index-student--privacy":"Privacy","index-student--about-us":"About us","index-teacher--spaces-title":"Your wheels","index-teacher--no-space":"You have not created a wheel yet.","index-teacher--button-submit-space":"Create a new wheel","index-teacher--shutdown":"Shutdown","index-teacher--shutdown-message":"Do you really want to shutdown the box ?","index-teacher--shutdown-confirm":"The box will shutdown in a few seconds...","update--reboot-confirm":"The box will reboot in a few seconds...","space-page--hide-panel":"Hide","space-page--code-panel-title":"Space's access code :","space-page--code-panel-description":"Spread this code for others to join you:","space-page--pinned-title":"Pinned","space-page--post-order":"Sort","space-page--post-order-asc":"Newest first","space-page--post-order-desc":"Older first","space-page--no-post":"There are no posts to display yet.","space-submit--page-title":"Create a space","space-submit--space-name":"Name of the space","space-submit--button-submit":"Create","space-submit--button-cancel":"Cancel","space-users--page-title":"Want to change your name ?","space-users-first-connection--page-title":"What is your name ?","space-users--page-description":"It will be used to identify your contributions","space-users--input-choose-author-placeholder":"Type a name...","space-users--submit-author":"Validate","space-users--user-exist":"The user %s already exists. Connect with this name ?","space-sidebar--home":"Home","space-sidebar--live-feed":"Live feed","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Add","space-sidebar--authors":"AUTHORS","space-sidebar--lessons":"Lessons","space-sidebar--resources":"Resources","space-submit--create-space":"Create a new wheel","space-submit--create-space-placeholer":"Wheel name","space-sidebar--create-own-space-1":"Create your own space","space-sidebar--create-own-space-2":"for free!","space-sidebar--privacy":"Privacy","space-sidebar--about-us":"About us","header--back":"Back","header--admin-access":"Teacher Access","header--register":"Create an account","header--login":"Log in","header--exit-message":"Leave this wheel ?","menu--show-all":"Show all","menu--favorites":"My favorites","menu--files":"Files","menu--images":"Images","menu--categories":"Categories","menu--authors":"Authors","menu--tags":"Keywords","menu--code":"Access code","post-edit--submit-button":"Edit","post-item--remove-pin":"Remove pin","post-item--add-pin":"Pin on top","post-item--remove-favorites":"Remove from my favorites","post-item--add-favorites":"Add to my favorites","post-item--delete-post-confirm":"Delete the post ?","post-item--delete-comment-confirm":"Delete the comment ?","post-submit--body-placeholder":"Say something...","post-submit--tags-placeholder":"Add Keywords...","post-submit--select-category":"Select a category","post-submit--no-category":"No category","post-submit--delete-image":"Delete the image","post-submit--confirm-delete-image":"Delete the image ?\nThis action is irreversible.","post-submit--confirm-delete-file":"Delete the file ?\nThis action is irreversible.","post-submit--submit-button":"Send","user-settings--page-title":"User settings","user-settings--confirm-logout":"Are you sure you want to sign out ?","user-settings--change-password":"Change password","user-settings--logout":"Sign out","user-settings--change-password-old-message":"Current Password :","user-settings--change-password-new-message":"New Password :","user-settings--change-password-confirm-message":"Your Password has been changed.","space-header--leave":"Leave this wheel","space-header--settings":"Settings","post--edit":"Edit","post--delete":"Delete","home--title":"Home","home--space-code-message":"<strong>Bzz!</strong> Spread this code for others to join you:","home--submit-button":"Add a section","home-post--order-up":"Up","home-post--order-down":"Down","home-post-delete--title":"Delete this section","home-post-delete--confirm":"Delete this section ?","home-post-edit--title":"Edit section","home-post-submit--title":"Add a section","home-post-submit--placeholder":"Title of the section","home-post-submit--confirm-toast":"The new section has been added.","modal--close":"Close","modal--cancel":"Cancel","modal--delete":"Delete","modal--submit":"Submit","modal--save":"Save changes","lessons--title":"Lessons","lessons--subtitle":"Articulate Storyline materials","lessons--submit-button":"Add a lesson","lessons-post--start-lesson":"Start this lesson","lessons-post-submit--title":"Add a lesson","lessons-post-submit--title-placeholder":"Title of the lesson","lessons-post-submit--description-placeholder":"Description of the lesson","lessons-post-submit--help":"Lessons must be exported in HTML5 format within Storyline.<br>The resulting folder must be zipped before being uploaded, and the .zip file must have the same name as the zipped folder it contains.","lessons-post-submit--confirm-toast":"The new lesson has been added.","lessons-post-delete--confirm":"Do you want to delete this lesson ?","lessons-post-delete--title":"Delete this lesson","lessons-post-edit--title":"Edit lesson","lessons-upload--button":"Upload a Storyline lesson","resources--title":"Resources","resources-post-edit--title":"Edit resource","resources-post-submit--title":"Add a resource","resources-post-submit--title-placeholder":"Title of the resource","resources-post-submit--description-placeholder":"Description of the ressource","resources-post-submit--confirm-toast":"The new resource has been added.","resources--submit-button":"Add a resource","resources-category-edit--title":"Edit a category","resources-category-submit--title":"Add a category","resources-category-submit--placeholder":"Category name","live-feed--notification-panel":"new messages","live-feed--load-more":"Load more...","live-feed-category-edit--title":"Edit a category","live-feed-category-submit--title":"Add a category","live-feed-category-submit--placeholder":"Category name","live-feed-post-delete--delete-confirm":"Do you want to delete this post ?","live-feed-post-delete--title":"Delete this post","live-feed-post--add-comment":"Add a comment...","live-feed-post--nb-likes-with-me":"You and %s people","live-feed-post--like":"You like","live-feed-post--nb-likes":"people","live-feed-post-submit--add-category":"+ Add a category...","live-feed-post-edit--title":"Edit post","live-feed-delete-comment--title":"Delete comment","live-feed-delete-comment--subtitle":"Delete this comment?","wheel--click-to-spin":"Click to spin!","wheel--welcome-message-title":"Welcome to your new Wheel!","wheel--welcome-message-body":"Start by adding students.","wheel--add-students":"Add new students","wheel-settings--add-student":"Add a student","wheel-settings--students-list":"Students","wheel-settings--show-all":"Show All","wheel-settings--hide-all":"Hide All","wheel--students":"Student(s)","wheel--hidden":"hidden","wheel--show":"show","wheel--hide-student":"Hide this student","admin--users-edit":"Edit","admin--user-edit-message":"Edit the name :"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr-FR.i18n.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/i18n/fr-FR.i18n.json                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["fr-FR"] = ["fr-FR","fr-FR"];
if(_.isUndefined(TAPi18n.translations["fr-FR"])) {
  TAPi18n.translations["fr-FR"] = {};
}

if(_.isUndefined(TAPi18n.translations["fr-FR"][namespace])) {
  TAPi18n.translations["fr-FR"][namespace] = {};
}

_.extend(TAPi18n.translations["fr-FR"][namespace], {"error-message":"Une erreur est survenue : ","access-denied--page-title":"Accès refusé !","access-denied--login-needed":"Vous devez d'abord vous connecter","access-denied--login":"Se connecter","admin--page-title":"Administration","admin--spaces-list":"Liste des espaces","admin--spaces-title":"Titre","admin--spaces-creation":"Date de création","admin--spaces-owner":"Propriétaire","admin--spaces-actions":"Actions","admin--spaces-open":"Ouvrir","admin--spaces-delete":"Supprimer","admin--users-list":"Liste des comptes enseignants","admin--users-logins":"Identifiant","admin--users-creation":"Date de création","admin--users-last-connexion":"Dernière connexion","admin--users-actions":"Actions","admin--users-change-password":"Changer le mot de passe","admin--users-delete":"Supprimer","admin--user-delete-message":"Supprimer cet utilisateur ?","admin--user-delete-confirm-message":"L'utilisateur a été supprimé","admin--change-password-message":"Entrez un nouveau mot de passe pour l'utilisateur :","admin--change-password-confirm-message":"Le mot de passe a bien été changé.","layout--connection-status":"Déconnecté","login--page-title":"Accès enseignant","login--mail":"E-mail","login--password":"Mot de passe","login--send-mail-forgot-password-link":"Réinitialiser mon mot de passe","login--button-submit":"S'identifier","login--register":"Vous n'avez pas encore de compte ?","login--register-contact-admin":"Contactez l'administrateur de la Beekee Box.","login--register-link":"Créez un compte","login--user-not-found":"L'utilisateur n'existe pas.","login--incorrect-password":"Le mot de passe n'est pas correct.","login--send-mail-forgot-password":"Un e-mail a été envoyé à l'adresse %s comprenant un lien pour réinitialiser votre mot de passe.","login--send-mail-forgot-password-error":"Une erreur est survenue. Merci de contacter l'administrateur à l'adresse : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Erreur lors de l'envoi d'un e-mail pour récupérer un mot de passe : %s","logout--page-title":"Se déconnecter","not-found--page-title":"Page introuvable","not-found--page-description":"Désolé, nous ne pouvons pas trouver une page à cette adresse.","not-found--go-back":"Revenir à l'accueil","privacy--page-title":"Politique de confidentialité","privacy--content":"<h3>Informations sur les comptes enseignants</h3><p>Lorsque vous crééz un compte « enseignant », vous devez fournir une adresse e-mail valide ainsi qu’un mot de passe. Ces données ne sont pas publiques et peuvent être modifiées à tout moment. Beekee Live ne divulguera en aucun cas ces informations à des tiers.</p><h3>Publications, photos, utilisateurs</h3><p>Beekee Live suit une politique de protection des données stricte. Les données publiées sur Beekee Live sont hébergées sur des serveurs localisés en Suisse. La plateforme Beekee Live est donc soumise au droit suisse sur la protection des données.Les publications, photographies, noms d’utilisateurs et toutes autres données publiées sur la plateforme sont la propriété exclusive de l’utilisateur. À tout moment, il peut choisir de supprimer définitivement ces données. En aucun cas Beekee Live ne transmettra ces données à des tiers.</p><h3>Intervention d’un technicien</h3><p>Sur demande de l’utilisateur, un technicien peut accéder à un espace et consulter les données qui s’y trouvent pour résoudre un problème technique.</p><h3>Cookies</h3><p>Comme de nombreux sites internet, Beekee Live utilise des cookies pour faciliter l’utilisation de la plateforme. Les informations contenues dans ces cookies ne sont pas utilisées par Beekee Live dans un autre but.</p>","register--page-title":"Créer un compte","register--mail":"E-mail","register--name":"Nom","register--password":"Mot de passe","register--password-confirm":"Confirmez le mot de passe","register--password-dont-match":"Les mots de passe de sont pas identiques.","register--terms":"En vous enregistrant, vous acceptez notre <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">politique de confidentialité</a>.<br>Votre adresse e-mail ne sera pas transmise à des tiers.","register--button-submit":"S'enregistrer","register--mail-exist":"Un compte lié à cet e-mail existe déjà.","register--mail-no-valid-message":"Merci d'entrer une adresse e-mail valide.","register--mail-subject":"Votre inscription sur Beekee Live","register--mail-content":"<h2>Bienvenue sur <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h1><h3>Nous sommes fiers de vous compter parmi nous. Commencez dès aujourd'hui à enseigner en créant votre premier espace Beekee Live !</h3><p><b>Astuce</b> : Savez-vous que vous pouvez utiliser Beekee Live sur ordinateur, smartphone ou tablette sans avoir besoin d'installer une app ?</p><p>L'<a href=\"https://www.beekee.ch\">équipe Beekee</a></p>","reset-password--page-title":"Réinitialiser votre mot de passe","reset-password--new-password":"Nouveau mot de passe","reset-password--button-submit":"Enregistrer","register--password-changed-message":"Le mot de passe a été changé.","space-edit-categories--page-title":"Gérer les catégories","space-edit-categories--page-description":"Les catégories servent à classer les publications.<br />À la différence des tags, les catégories sont définies à l'avance par l'enseignant.","space-edit-categories--confirm-delete":"Supprimer la catégorie","space-edit--button-submit-add-category":"Ajouter","space-edit-categories--edit-category":"Modifier la catégorie","space-edit--page-title":"Paramètres","space-edit--subtitle-general":"Général","space-edit--list-title-change-code":"Changer le code d'accès","space-edit--description-change-code":"Transmettez le code d'accès à vos élèves pour qu'ils  rejoignent cet espace.","space-edit--list-title-rename-space":"Renommer cet espace","space-edit--list-title-delete-space":"Supprimer cet espace","space-edit--list-title-content":"Contenu","space-edit--list-title-flow":"Flux continu","space-edit--description-flow":"En activant le flux continu, les nouvelles publications s'affichent en temps réel.","space-edit--list-title-categories":"Gérer les catégories","space-edit--list-title-comments":"Autoriser les commentaires","space-edit--subtitle-users":"Utilisateurs","space-edit--list-title-users":"Gérer les auteurs","space-edit--list-title-free-users":"Auteurs libres","space-edit--description-free-users":"En activant \"Auteurs libres\", les utilisateurs entrent eux-même leur nom d'utilisateur à la première connexion. Autrement, ils choisiront parmis une liste modifiable sous \"Gérer les auteurs\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Les auteurs peuvent modifier leurs propres publications","space-edit--select-permissions-all":"Les auteurs peuvent modifier toutes les publications","space-edit--select-permissions-none":"Personne ne peut ajouter ou modifier des publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Mettre à jour la box","space-edit--list-title-ip":"Adresse IP :","space-edit--list-title-sync":"Syncroniser avec le cloud","space-edit--description-sync":"Branchez la beekee box à l'aide d'un câble ethernet pour syncroniser son contenu avec le cloud (www.beekee.ch). Cela peut prendre plusieurs minutes.","space-edit--subtitle-account":"Votre compte","space-edit--description-change-password":"Modifier le mot de passe de votre compte.","space-edit--change-code-message":"Changer le code d'accès","space-edit--change-code-confirm-message":"Le code d'accès a été changé.","space-edit--change-code-already-used-message":"Ce code est déjà attribué à un autre espace.","space-edit--rename-space-message":"Renommer cet espace","space-edit--rename-space-confirm-message":"Cet espace s'appelle désormais","space-edit--delete-space-message":"Effacer définitivement cet espace et son contenu ?","space-edit--delete-space-confirm-message":"L'espace a bien été supprimé.","space-edit--sync-login-message":"Pour synchroniser cet espace avec le cloud, vous devez posséder un compte sur www.beekee.ch.\nSi c'est le cas, entrez le nom d'utilisateur de votre compte :","space-edit--sync-error-message":"Un problème est survenu. Vérifiez que la box est bien connectée à internet et recommencez.","space-edit--update-message":"La mise à jour de la box peut rendre la plateforme inaccessible pendant plusieurs minutes.\nVoulez-vous continuer ?","space-edit--update-waiting-message":"La box va être mise à jour, merci de patienter...","space-edit--no-ip":"Pas d'adresse IP","space-edit--not-connected":"Non connecté","space-edit--module-resources":"Mettre à disposition des fichiers pour vos étudiants","space-edit--public-space":"Permet à n'importe qui de se connecter à cet espace sans nécessiter de code d'accès","space-edit--permissions-add-categories":"Les utilisateurs peuvent ajouter des catégories","space-edit--permissions-add-posts":"Les utilisateurs peuvent ajouter des posts","space-edit-authors---page-title":"Gérer les auteurs","space-edit-authors---page-description":"Les auteurs servent à identifier les publications.<br>Ajoutez par exemple le nom de vos élèves ou le nom d'un groupe.","space-edit-authors---submit-button":"Ajouter","space-edit-authors--delete-author-message":"Supprimer l'auteur %s ?","space-edit-authors--edit-author-message":"Modifier l'auteur :","space-edit-authors--add-author-error-message":"Il y a déjà un auteur avec ce nom.","index-student--title":"La plateforme pour soutenir la collaboration en temps réel","index-student--wrapper-text":"Un espace privé pour partager photos et messages<br>avec vos étudiants, collègues ou amis.","index-student--code":"Espace privé","index-student--code-input-placeholder":"Entrez un code d'accès","index-student--visited-title":"Récemment visité :","index-student--delete-recent":"(effacer)","index-student--public-spaces-title":"Espaces publics","index-student--button-code-link":"Valider","index-student--space-doesnt-exist-message":"Cet espace n'existe pas.\nAssurez-vous de respecter les majuscules et les minuscules.","index-student--create-your-space-1":"Avez-vous essayé","index-student--create-your-space-2":"Beekee Live","index-student--create-your-space-3":" pour promouvoir la collaboration en temps réel avec vos élèves ?","index-student--privacy":"Confidentialité","index-student--about-us":"À propos de nous","index-teacher--spaces-title":"Vos roues","index-teacher--no-space":"Vous n'avez pas encore créé de roue.","index-teacher--button-submit-space":"Créer une nouvelle roue","index-teacher--shutdown":"Éteindre","index-teacher--shutdown-message":"Voulez-vous vraiment éteindre la box ?","index-teacher--shutdown-confirm":"La box va s'éteindre dans quelques secondes...","update--reboot-confirm":"La box va redémarrer dans quelques secondes...","space-page--hide-panel":"Cacher","space-page--code-panel-title":"Code d'accès de l'espace :","space-page--code-panel-description":"Transmettez ce code pour que d'autres vous rejoignent:","space-page--pinned-title":"Épinglés","space-page--post-order":"Tri","space-page--post-order-asc":"Plus récents d'abord","space-page--post-order-desc":"Plus anciens d'abord","space-page--no-post":"Il n'y pas encore de publication à afficher.","space-submit--page-title":"Créer un espace","space-submit--space-name":"Nom de l'espace","space-submit--button-submit":"Créer","space-submit--button-cancel":"Annuler","space-users-first-connection--page-title":"Quel est votre nom ?","space-users--page-title":"Vous voulez changer de nom d'utilisateur ?","space-users--page-description":"Il sera utilisé pour identifier vos contributions","space-users--input-choose-author-placeholder":"Entrez un nom...","space-users--submit-author":"Valider","space-users--user-exist":"L'utilisateur %s existe déjà. Se connecter avec ce nom ?","space-sidebar--home":"Accueil","space-sidebar--live-feed":"Direct","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Ajouter","space-sidebar--authors":"AUTEURS","space-sidebar--lessons":"Leçons","space-sidebar--resources":"Ressources","space-sidebar--create-own-space-1":"Créé votre propre espace","space-sidebar--create-own-space-2":"gratuitement !","space-sidebar--privacy":"Confidentialité","space-sidebar--about-us":"À propos de nous","space-submit--create-space":"Créer une nouvelle roue","space-submit--create-space-placeholer":"Nom de la roue","header--back":"Retour","header--admin-access":"Accès enseignant","header--register":"Créer un comte","header--login":"S'identifier","header--exit-message":"Quitter cette roue ?","menu--show-all":"Tout afficher","menu--favorites":"Mes favoris","menu--files":"Fichiers","menu--images":"Images","menu--categories":"Catégories","menu--authors":"Auteurs","menu--tags":"Mots-clés","menu--code":"Code d'accès","post-edit--submit-button":"Modifier","post-item--remove-pin":"Retirer l'épingle","post-item--add-pin":"Épingler en haut","post-item--remove-favorites":"Retirer de mes favoris","post-item--add-favorites":"Ajouter à mes favoris","post-item--delete-post-confirm":"Effacer la publication ?","post-item--delete-comment-confirm":"Effacer le commentaire ?","post-submit--body-placeholder":"Dites quelque chose...","post-submit--tags-placeholder":"Ajoutez des mots-clés...","post-submit--select-category":"Sélectionnez une catégorie","post-submit--no-category":"Aucune catégorie","post-submit--delete-image":"Supprimer l'image","post-submit--confirm-delete-image":"Effacer l'image ?\nCette action est irréversible.","post-submit--confirm-delete-file":"Effacer le fichier ?\nCette action est irréversible.","post-submit--submit-button":"Envoyer","user-settings--page-title":"Paramètres de l'utilisateur","user-settings--confirm-logout":"Voulez-vous vraiment vous déconnecter ?","user-settings--change-password":"Changer mot de passe","user-settings--logout":"Se déconnecter","user-settings--change-password-old-message":"Mot de passe actuel :","user-settings--change-password-new-message":"Nouveau mot de passe :","user-settings--change-password-confirm-message":"Votre mot de passe a été changé.","space-header--leave":"Quitter cette roue","space-header--settings":"Paramètres","post--edit":"Éditer","post--delete":"Supprimer","home--title":"Accueil","home--space-code-message":"<strong>Bzz!</strong> Partagez ce code pour que d'autres se joignent à vous:","home--submit-button":"Ajouter une section","home-post--order-up":"Monter","home-post--order-down":"Descendre","home-post-delete--title":"Supprimer cette section","home-post-delete--confirm":"Supprimer cette section ?","modal--close":"Fermer","modal--cancel":"Annuler","modal--delete":"Supprimer","modal--save":"Sauver les changements","modal--submit":"Soumettre","home-post-edit--title":"Modifier la section","home-post-submit--title":"Ajouter une section","home-post-submit--placeholder":"Titre de la section","home-post-submit--confirm-toast":"La section a été ajoutée.","lessons--title":"Leçons","lessons--subtitle":"E-learning Articulate Storyline","lessons--submit-button":"Ajouter une leçon","lessons-post--start-lesson":"Lancer cette leçon","lessons-post-submit--title":"Ajouter une leçon","lessons-post-submit--title-placeholder":"Titre de la leçon","lessons-post-submit--description-placeholder":"Description de la leçon","lessons-post-submit--help":"Les leçons doivent être exportées au format HTML5 à partir du logiciel Storyline.<br>Le dossier résultant doit être zippé avant d'être uploadé, et le .zip doit avoir le même nom que le dossier qu'il contient.","lessons-post-submit--confirm-toast":"La leçon a été ajoutée.","lessons-post-delete--confirm":"Voulez-vous supprimer cette leçon ?","lessons-post-delete--title":"Supprimer cette leçon","lessons-post-edit--title":"Editer une leçon","lessons-upload--button":"Uploader une leçon Storyline","resources--title":"Ressources","resources-post-edit--title":"Editer une resource","resources-post-submit--title":"Ajouter une ressource","resources-post-submit--title-placeholder":"Titre de la ressource","resources-post-submit--description-placeholder":"Description de la ressource","resources-post-submit--confirm-toast":"La ressource a été ajoutée.","resources--submit-button":"Ajouter une ressource","resources-category-edit--title":"Éditer une catégorie","resources-category-submit--title":"Ajouter une catégorie","resources-category-submit--placeholder":"Nom de la catégorie","live-feed--notification-panel":"nouveau(x) message(s)","live-feed--load-more":"Charger plus...","live-feed-category-edit--title":"Éditer une catégorie","live-feed-category-submit--title":"Ajouter une catégorie","live-feed-category-submit--placeholder":"Nom de la catégorie","live-feed-post-delete--delete-confirm":"Voulez-vous supprimer ce post ?","live-feed-post-delete--title":"Supprimer ce post","live-feed-post--add-comment":"Ajoutez un commentaire...","live-feed-post--nb-likes-with-me":"Vous et %s personne(s)","live-feed-post--like":"Vous aimez","live-feed-post--nb-likes":"personne(s)","live-feed-post-submit--add-category":"+ Ajouter une catégorie...","live-feed-post-edit--title":"Éditer un post","live-feed-delete-comment--title":"Supprimer un commentaire","live-feed-delete-comment--subtitle":"Supprimer ce commentaire ?","wheel--click-to-spin":"Cliquer pour tourner !","wheel--welcome-message-title":"Bienvenue sur votre nouvelle roue !","wheel--welcome-message-body":"Commencez par ajouter des élèves.","wheel--add-students":"Ajouter des élèves","wheel-settings--add-student":"Ajouter un élève","wheel-settings--students-list":"Élèves","wheel-settings--show-all":"Afficher tous","wheel-settings--hide-all":"Masquer tous","wheel--students":"élève(s)","wheel--hidden":"masqué(s)","wheel--show":"afficher","wheel--hide-student":"Masquer cet étudiant","admin--users-edit":"Éditer","admin--user-edit-message":"Modifiez le nom :"});
TAPi18n._registerServerTranslator("fr-FR", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app_loader.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/app_loader.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isServer) {
  Inject.rawHead("metaLoader", '<meta name="viewport" content="initial-scale=1.0, user-scalable=0, width=device-width, height=device-height"/><meta name="apple-mobile-web-app-capable" content="yes">	<meta name="mobile-web-app-capable" content="yes">');
  Inject.rawBody("htmlLoader", Assets.getText('app_loader.html'));
}

if (Meteor.isClient) {
  Meteor.startup(function () {
    setTimeout(function () {
      $("#inject-loader-wrapper").fadeOut(500, function () {
        $(this).remove();
      });
    }, 700);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"apps.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/apps.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Apps: () => Apps
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Apps = new Mongo.Collection('home-apps');
Apps.allow({
  insert: function () {
    return true;
  },
  update: function (userId, space) {
    return true;
  },
  remove: function (userId, space) {
    return true;
  } // insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }

}); // Publications

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allApps', function appsPublication() {
    return Apps.find();
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"synchronizations.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/synchronizations.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Synchronizations: () => Synchronizations
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Synchronizations = new Mongo.Collection('home-synchronizations');
Synchronizations.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  } // insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
  // remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }

}); // Publications

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allSynchronizations', function synchronizationsPublication() {
    return Synchronizations.find();
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/users.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);

// var usersDB	= new MongoInternals.RemoteCollectionDriver('mongodb://localhost:27017/beekee-live');
// var collection	= usersDB.open('users');
//const database = new MongoInternals.RemoteCollectionDriver('mongodb://localhost:27017/beekee-live');
//const collection = new Mongo.Collection("users", { _driver: database });
//export const Users = new Mongo.Collection("users", { _driver: database });
// Sharing the same Account collection than beekee-live
if (Meteor.isServer) {
  // check that the userId specified is admin
  isAdmin = function (userId) {
    console.log("isadmin");
    return Roles.userIsInRole(Meteor.user(), 'admin');
  }; // Publish Roles to client


  Meteor.publish(null, function () {
    if (this.userId) {
      return Meteor.roleAssignment.find({
        'user._id': this.userId
      });
    } else {
      this.ready();
    }
  });
  Meteor.publish(null, function () {
    return Meteor.roleAssignment.find();
  }); // Meteor.publish('allUsers', function () {
  // 	console.log("users: "+Meteor.users.find().count());
  //   return Meteor.users.find();
  // });
  // Server2 = DDP.connect("http://beekee.box:83");
  // Accounts.connection = Server2;
  //var database = new MongoInternals.RemoteCollectionDriver('mongodb://localhost:27017/beekee-live');
  //Meteor.users = new Mongo.Collection("users", { _driver: database });
  //export const Users = new Mongo.Collection('apps');
  // This code only runs on the server
  // Meteor.publish('allUsers', function () {
  // 	console.log("users: "+Meteor.users.find().count());
  //   return Meteor.users.find();
  // });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"fixtures.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/fixtures.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Apps;
module.link("../imports/api/apps.js", {
  Apps(v) {
    Apps = v;
  }

}, 0);

// ###  Create admin user at first start  ###
if (Meteor.users.find().count() === 0) {
  // Create the admin role
  Roles.createRole('admin', {
    unlessExists: true
  });
  var adminPassword = Meteor.settings.adminPassword;
  var users = [{
    username: "admin",
    roles: ['admin']
  }];

  _.each(users, function (user) {
    var id;
    id = Accounts.createUser({
      username: user.username,
      email: "Admin",
      password: adminPassword,
      profile: {
        name: "Admin"
      }
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
    }
  });
}

if (Apps.find().count() === 0) {
  var defaultApps = [{
    name: "Live",
    customApp: false,
    onlyTeacher: false,
    order: 3,
    doc_user: false,
    doc_admin: false,
    last_version: "1.3.3",
    url: "http://live.beekee.box",
    icon: "beekee-live.png",
    description: "Beekee Live promote real-time interaction by allowing learners to express themselves asking questions, posting photos or sharing files.",
    installed: true,
    version: "1.4",
    hidden: false
  }, {
    name: "Resources",
    customApp: false,
    onlyTeacher: false,
    order: 7,
    doc_user: false,
    doc_admin: false,
    last_version: "1.3.3",
    url: "http://resources.beekee.box",
    icon: "beekee-resources.png",
    description: "With Beekee Resources, you can easily share files with your learners.",
    installed: true,
    version: "0.1",
    hidden: false
  }, {
    name: "Wheel",
    customApp: false,
    onlyTeacher: true,
    order: 9,
    doc_user: false,
    doc_admin: false,
    last_version: "0.7",
    url: "http://wheel.beekee.box",
    icon: "beekee-wheel.png",
    description: "Beekee Wheel is a simple random picker wheel that allow you to pick up a random name.",
    installed: true,
    version: "0.8",
    hidden: false
  }, {
    name: "Timer",
    customApp: false,
    onlyTeacher: false,
    order: 8,
    doc_user: false,
    doc_admin: false,
    last_version: "1.3.3",
    url: "http://timer.beekee.box",
    icon: "beekee-timer.png",
    description: "Beekee Timer is a simple timer that lets your learners know how much time they have left.",
    installed: true,
    version: "0.1",
    hidden: false
  }, {
    name: "Moodle",
    customApp: true,
    onlyTeacher: false,
    order: 1,
    doc_user: "moodle_teacherdoc.pdf",
    doc_admin: false,
    last_version: "xx",
    url: "http://moodle.beekee.box",
    icon: "moodle.png",
    description: "Moodle is a free, online Learning Management system enabling educators to create their own private website filled with dynamic courses that extend learning, any time, anywhere.",
    installed: true,
    version: "3.11.2",
    hidden: false
  }, {
    name: "Kolibri",
    customApp: true,
    onlyTeacher: false,
    order: 2,
    doc_user: "kolibri_userdoc.pdf",
    doc_admin: false,
    last_version: "xx",
    url: "http://kolibri.beekee.box",
    icon: "kolibri.png",
    description: "Kolibri is an open-source educational platform specially designed to provide offline access to a wide range of quality, openly licensed educational resources in low-resource contexts like rural schools, refugee camps, orphanages, and also in non-formal school programs.",
    installed: true,
    version: "0.14.7",
    hidden: false
  }, // {name:"Etherpad", customApp:true, onlyTeacher:false, order:5, doc_user:false, doc_admin:false, last_version:"xx", url:"http://etherpad.beekee.box", icon:"etherpad.png", description:"Etherpad allows you to edit documents collaboratively in real-time, much like a live multi-player editor that runs in your browser. Write articles, press releases, to-do lists, etc. together with your friends, fellow students or colleagues, all working on the same document at the same time.", installed:true, version: "1.8.14", hidden:false},
  {
    name: "Storm",
    customApp: true,
    onlyTeacher: false,
    order: 4,
    doc_user: false,
    doc_admin: false,
    last_version: "xx",
    url: "http://storm.beekee.box",
    icon: "storm.png",
    description: "Create and animate live surveys, brainstorms and quizzes.",
    installed: true,
    version: "0.4.5",
    hidden: false
  }, {
    name: "Pad",
    customApp: true,
    onlyTeacher: false,
    order: 5,
    doc_user: false,
    doc_admin: false,
    last_version: "xx",
    url: "http://pad.beekee.box",
    icon: "pad.png",
    description: "Create collaborative walls to share and organize content.",
    installed: true,
    version: "0.8.1",
    hidden: false
  }, {
    name: "Buzzer",
    customApp: true,
    onlyTeacher: true,
    order: 6,
    doc_user: false,
    doc_admin: false,
    last_version: "xx",
    url: "http://buzzer.beekee.box",
    icon: "buzzer.png",
    description: "Create a virtual gaming room around a connected buzzer.",
    installed: true,
    version: "0.2.4",
    hidden: false
  }];

  _.each(defaultApps, function (defaultApps) {
    Apps.insert(defaultApps);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/methods.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let HTTP;
module.link("meteor/http", {
  HTTP(v) {
    HTTP = v;
  }

}, 0);
Meteor.startup(function () {
  if (Meteor.isServer) {
    var fs = Npm.require('fs');

    exec = Npm.require('child_process').exec; // No idea what is this ?

    cmd = Meteor.wrapAsync(exec);
    var wifiSettingsPath = Meteor.settings.wifiSettingsPath;
    var configPath = Meteor.settings.configPath;

    const readline = require('readline');

    Meteor.methods({
      'adminSetNewPassword': function (adminId, userId, newPassword) {
        // Admin can forcibly change the password for a user
        if (Roles.userIsInRole(adminId, 'admin')) {
          Accounts.setPassword(userId, newPassword);
        }
      },
      'createAccount': function (email, password, profile) {
        return Accounts.createUser({
          email: email,
          password: password,
          profile: profile
        }); // Callback is not supported on server-side
      },
      'editAccount': function (userId, email, password, profile) {
        Meteor.users.update({
          _id: userId
        }, {
          $set: {
            'emails.0.address': email,
            profile: profile
          }
        });

        if (password) {
          Accounts.setPassword(userId, password);
        }
      },
      'deleteUser': function (userId) {
        Meteor.users.remove(userId, function (error, result) {
          if (error) {
            console.log("Error when deleting user : " + error.message);
          }
        });
      },
      'addAdminRole': function (userId) {
        Roles.addUsersToRoles(userId, 'admin');
      },
      'removeAdminRole': function (userId) {
        Roles.removeUsersFromRoles(userId, 'admin');
      },
      // 'getUsedSpace': function() {
      // 	var res;
      // 	res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " ("+cmd("df / | awk '{print ($5)}' | tail -1")+"used)";
      // 	return res;
      // },
      'runCommand': function (password, command) {
        var res;
        res = cmd("echo " + password + " | sudo -S " + command);
        return res;
      },
      'getUsedSpace': function () {
        var res = {}; //res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " ("+cmd("df / | awk '{print ($5)}' | tail -1")+"used)";

        res.storageUsage = cmd("df / | awk '{print ($3)}' | tail -1");
        res.storageUsage = res.storageUsage / 1000000;
        res.storageUsage = res.storageUsage.toFixed(2);
        res.storageTotal = cmd("df / | awk '{print ($2)}' | tail -1");
        res.storageTotal = res.storageTotal / 1000000;
        res.storageTotal = res.storageTotal.toFixed(2);
        res.percentage = cmd("df / | awk '{print ($5)}' | tail -1");
        return res;
      },
      'getSSID': function () {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var match = data.match(new RegExp('ssid=(.*)'));
        var SSID = match[1];
        SSID = decodeURIComponent(SSID.replace(/../g, '%$&'));
        return SSID;
      },
      'setSSID': function (newSSID) {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        const encodedNewSSID = new Buffer(newSSID).toString('hex'); // Convert into Hex

        var newData = data.replace(data.match(new RegExp('ssid=(.*)'))[1], encodedNewSSID);
        fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      },
      'getWifiPassword': function () {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var match = data.match(new RegExp('password=(.*)'));
        var password = match[1];
        return password;
      },
      'setWifiPassword': function (newPassword) {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('password=(.*)'))[1], newPassword);
        fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      },
      'getWifiChannel': function () {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var match = data.match(new RegExp('channel=(.*)'));
        var channel = match[1];
        return channel;
      },
      'setWifiChannel': function (newChannel) {
        var data = fs.readFileSync(wifiSettingsPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('channel=(.*)'))[1], newChannel);
        fs.writeFileSync(wifiSettingsPath, newData, 'utf-8');
      },
      'getSerial': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('SERIAL=(.*)'));
        var serial = match[1];
        return serial;
      },
      'getOperatorName': function () {
        var operatorName;
        operatorName = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-operator-name | grep -m2 'Name             ' | awk '{print $3}'");
        return operatorName;
      },
      'getSignalStrength': function () {
        var signalStrength;
        signalStrength = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk '{print $3, $2}'");
        return signalStrength;
      },
      // 'getBand': function () {
      // 	var band;
      //			band = cmd("sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength | grep -m1 Network | awk \"{print $2}\" | cut -d\\' -f2");
      // 	return band;
      // },
      'getAPN': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('APN=(.*)'));
        var APN = match[1];
        return APN;
      },
      'getAPNUser': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('APN_USERNAME=(.*)'));
        var APNUser = match[1];
        return APNUser;
      },
      'getAPNPassword': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('APN_PASSWORD=(.*)'));
        var APNPassword = match[1];
        return APNPassword;
      },
      'getSimPin': function () {
        var data = fs.readFileSync(configPath, 'utf-8');
        var match = data.match(new RegExp('SIM_PIN=(.*)'));
        var SimPin = match[1];
        if (SimPin != "") return "******";else return "";
      },
      'setSimPin': function (PIN) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('SIM_PIN=.*')), 'SIM_PIN=' + PIN);
        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'setAPN': function (APN, user, password) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('APN=.*')), 'APN=' + APN); // var newData = data.replace(data.match(new RegExp('APN=(.*)'))[1], APN);

        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'setAPNUser': function (APNUser) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('APN_USERNAME=.*')), 'APN_USERNAME=' + APNUser);
        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'setAPNPassword': function (APNPassword) {
        var data = fs.readFileSync(configPath, 'utf-8');
        var newData = data.replace(data.match(new RegExp('APN_PASSWORD=.*')), 'APN_PASSWORD=' + APNPassword);
        fs.writeFileSync(configPath, newData, 'utf-8');
      },
      'getRemoteStatus': function () {
        var res;
        res = cmd("systemctl is-active remote-iot.service >/dev/null 2>&1 && echo 1 || echo 0");

        if (res[0] == "1") {
          // [0] is a hack because the result res has one extra character
          return true;
        } else return false;
      },
      'getAutoSyncStatus': function () {
        var res;
        res = cmd("systemctl is-active autosync.service >/dev/null 2>&1 && echo 1 || echo 0");

        if (res[0] == "1") {
          // [0] is a hack because the result res has one extra character
          return true;
        } else return false;
      },
      'getInternetSharingStatus': function () {
        var res;
        res = cmd("sudo wifi-ap.config get share.disabled");

        if (res.includes("true")) {
          res = false;
        } else res = true;

        return res;
      },
      'activateInternetSharing': function () {
        var res;
        res = cmd("sudo wifi-ap.config set share.disabled=false");
        return res;
      },
      'disactivateInternetSharing': function () {
        var res;
        res = cmd("sudo wifi-ap.config set share.disabled=true");
        return res;
      },
      'activateRemote': function () {
        var res;
        res = cmd("sudo systemctl start remote-iot.service");
        res2 = cmd("sudo systemctl enable remote-iot.service");
        return res;
      },
      'disactivateRemote': function () {
        var res;
        res = cmd("sudo systemctl stop remote-iot.service");
        res2 = cmd("sudo systemctl disable remote-iot.service");
        return res;
      },
      'activateAutoSync': function () {
        var res;
        res = cmd("sudo systemctl start autosync.service");
        res2 = cmd("sudo systemctl enable autosync.service");
        return res;
      },
      'disactivateAutoSync': function () {
        var res;
        res = cmd("sudo systemctl stop autosync.service");
        res2 = cmd("sudo systemctl disable autosync.service");
        return res;
      },
      'getPiJuiceStatus': function () {
        var res;
        var scriptsPath = Meteor.settings.scriptsPath;
        res = cmd("python3 " + scriptsPath + "/pijuice_status.py"); //res = cmd("python3 /home/ubuntu/scripts/pijuice_status.py");

        return res;
      },
      'getEth0IP': function () {
        // Get IP of box
        var res; //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        res = cmd("ip addr show eth0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1"); //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        return res;
      },
      'getWwan0IP': function () {
        // Get IP of box
        var res; //console.log("result : "+"ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        res = cmd("ip addr show wwan0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1"); //res = cmd("ifconfig eth0 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");
        //console.log("ip : "+"ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ip addr show eth0 | grep \"inet\b\" | awk '{print $2}' | cut -d/ -f1");
        //res = cmd("ifconfig "+interface+" 2>/dev/null|awk '/inet addr:/ {print $2}'|sed 's/addr://'");

        return res;
      },
      'getVersion': function () {
        json = JSON.parse(Assets.getText("version.json"));
        return json.version;
      },
      'restartMobileConnect': function () {
        var res;
        res = cmd("sudo systemctl restart mobile_connect.service");
        return res;
        '';
      },
      synchronize: function () {
        console.log("Starting sync...");
        var deviceSerial = Meteor.settings.public.serial;
        var deviceToken = Meteor.settings.moodleAPIToken;
        var url = Meteor.settings.cloudURL + "/api/startSync";
        var options = {
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            'deviceSerial': deviceSerial,
            'deviceToken': deviceToken
          },
          npmRequestOptions: {
            rejectUnauthorized: false // TODO remove when deploy

          },
          timeout: 1200000
        };

        try {
          console.log("url: " + url);
          console.log("options: " + options);
          console.log("ici");
          var result = HTTP.call('POST', url, options); //var result = HTTP.post( url, options );

          var resultContent = result.content; //Synchronizations.insert({date:Date.now()});

          return resultContent;
        } catch (e) {
          console.log("Error while trying to syncronize...", e);
          return "Error while trying to syncronize... " + e;
        } //return resultContent;

      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/publications.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Meteor.publish('allApps', function() {
// 	return Apps.find({});
// });
// Meteor.publish("users", function() {
//     return Meteor.users.find({}, {fields:{createdAt: true, profile: true, emails: true, username: true}});
// });
Meteor.publish('allUsers', function () {
  console.log("users: " + Meteor.users.find().count());
  return Meteor.users.find();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.link("../imports/api/apps.js");
module.link("../imports/api/synchronizations.js");
module.link("../imports/api/users.js");
module.link("../server/fixtures.js");
module.link("../server/methods.js");
module.link("../server/publications.js");
module.link("../lib/app_loader.js");
//import {DDP} from 'meteor/ddp';
//import {Accounts} from 'meteor/accounts-base';
// import '../imports/startup/server/fixtures.js';
// import '../imports/api/fixtures.js';
Meteor.startup(() => {
  console.log("meteor started..."); // code to run on server at startup
  //  Server2 = DDP.connect("http://beekee.box:83");
  // Accounts.connection = Server2;
  // console.log("on connecte...");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/lib/i18n/en.i18n.json");
require("/lib/i18n/fr-FR.i18n.json");
var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FwcHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N5bmNocm9uaXphdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiZmFkZU91dCIsInJlbW92ZSIsIm1vZHVsZSIsImV4cG9ydCIsIkFwcHMiLCJNb25nbyIsImxpbmsiLCJ2IiwiQ29sbGVjdGlvbiIsImFsbG93IiwiaW5zZXJ0IiwidXBkYXRlIiwidXNlcklkIiwic3BhY2UiLCJwdWJsaXNoIiwiYXBwc1B1YmxpY2F0aW9uIiwiZmluZCIsIlN5bmNocm9uaXphdGlvbnMiLCJzeW5jaHJvbml6YXRpb25zUHVibGljYXRpb24iLCJpc0FkbWluIiwiY29uc29sZSIsImxvZyIsIlJvbGVzIiwidXNlcklzSW5Sb2xlIiwidXNlciIsInJvbGVBc3NpZ25tZW50IiwicmVhZHkiLCJ1c2VycyIsImNvdW50IiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsImFkbWluUGFzc3dvcmQiLCJzZXR0aW5ncyIsInVzZXJuYW1lIiwicm9sZXMiLCJfIiwiZWFjaCIsImlkIiwiQWNjb3VudHMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInByb2ZpbGUiLCJuYW1lIiwibGVuZ3RoIiwiYWRkVXNlcnNUb1JvbGVzIiwiZGVmYXVsdEFwcHMiLCJjdXN0b21BcHAiLCJvbmx5VGVhY2hlciIsIm9yZGVyIiwiZG9jX3VzZXIiLCJkb2NfYWRtaW4iLCJsYXN0X3ZlcnNpb24iLCJ1cmwiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJpbnN0YWxsZWQiLCJ2ZXJzaW9uIiwiaGlkZGVuIiwiSFRUUCIsImZzIiwiTnBtIiwicmVxdWlyZSIsImV4ZWMiLCJjbWQiLCJ3cmFwQXN5bmMiLCJ3aWZpU2V0dGluZ3NQYXRoIiwiY29uZmlnUGF0aCIsInJlYWRsaW5lIiwibWV0aG9kcyIsImFkbWluSWQiLCJuZXdQYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX2lkIiwiJHNldCIsImVycm9yIiwicmVzdWx0IiwibWVzc2FnZSIsInJlbW92ZVVzZXJzRnJvbVJvbGVzIiwiY29tbWFuZCIsInJlcyIsInN0b3JhZ2VVc2FnZSIsInRvRml4ZWQiLCJzdG9yYWdlVG90YWwiLCJwZXJjZW50YWdlIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsIm1hdGNoIiwiUmVnRXhwIiwiU1NJRCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJuZXdTU0lEIiwiZW5jb2RlZE5ld1NTSUQiLCJCdWZmZXIiLCJ0b1N0cmluZyIsIm5ld0RhdGEiLCJ3cml0ZUZpbGVTeW5jIiwiY2hhbm5lbCIsIm5ld0NoYW5uZWwiLCJzZXJpYWwiLCJvcGVyYXRvck5hbWUiLCJzaWduYWxTdHJlbmd0aCIsIkFQTiIsIkFQTlVzZXIiLCJBUE5QYXNzd29yZCIsIlNpbVBpbiIsIlBJTiIsImluY2x1ZGVzIiwicmVzMiIsInNjcmlwdHNQYXRoIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInN5bmNocm9uaXplIiwiZGV2aWNlU2VyaWFsIiwicHVibGljIiwiZGV2aWNlVG9rZW4iLCJtb29kbGVBUElUb2tlbiIsImNsb3VkVVJMIiwib3B0aW9ucyIsImhlYWRlcnMiLCJucG1SZXF1ZXN0T3B0aW9ucyIsInJlamVjdFVuYXV0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QUFwRDtBQUNBLGlCQUFPLHlDQUF3Q0EsQ0FBL0M7QUFDQSxTQWpDc0IsQ0FrQ3hCOztBQUNDO0FBMVNhLEtBQWY7QUE0U0E7QUFDQSxDQTFURCxFOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdFM0ksTUFBTSxDQUFDeUIsT0FBUCxDQUFlLFVBQWYsRUFBMkIsWUFBWTtBQUN0Q00sU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBVWhDLE1BQU0sQ0FBQ3NDLEtBQVAsQ0FBYVgsSUFBYixHQUFvQlksS0FBcEIsRUFBdEI7QUFDQyxTQUFPdkMsTUFBTSxDQUFDc0MsS0FBUCxDQUFhWCxJQUFiLEVBQVA7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7O0FDVEYsSUFBSTNCLE1BQUo7QUFBV2EsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDakIsUUFBTSxDQUFDa0IsQ0FBRCxFQUFHO0FBQUNsQixVQUFNLEdBQUNrQixDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFETCxNQUFNLENBQUNJLElBQVAsQ0FBWSx3QkFBWjtBQUFzQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksb0NBQVo7QUFBa0RKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHlCQUFaO0FBQXVDSixNQUFNLENBQUNJLElBQVAsQ0FBWSx1QkFBWjtBQUFxQ0osTUFBTSxDQUFDSSxJQUFQLENBQVksc0JBQVo7QUFBb0NKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLDJCQUFaO0FBQXlDSixNQUFNLENBQUNJLElBQVAsQ0FBWSxzQkFBWjtBQVlqVDtBQUNBO0FBR0E7QUFFQTtBQUdBakIsTUFBTSxDQUFDUSxPQUFQLENBQWUsTUFBTTtBQUNwQnVCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBRG9CLENBS25CO0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FWRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdEluamVjdC5yYXdIZWFkKFwibWV0YUxvYWRlclwiLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHRcIi8+PG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj4nKTtcblxuXHRJbmplY3QucmF3Qm9keShcImh0bWxMb2FkZXJcIiwgQXNzZXRzLmdldFRleHQoJ2FwcF9sb2FkZXIuaHRtbCcpKTtcbn1cblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkgeyAkKHRoaXMpLnJlbW92ZSgpOyB9KTtcblx0XHR9LCA3MDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQXBwcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdob21lLWFwcHMnKTtcblxuXG5cbkFwcHMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblx0dXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblx0cmVtb3ZlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsQXBwcycsIGZ1bmN0aW9uIGFwcHNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gQXBwcy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBTeW5jaHJvbml6YXRpb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2hvbWUtc3luY2hyb25pemF0aW9ucycpO1xuXG5cblxuU3luY2hyb25pemF0aW9ucy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWV9LFxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZX0sXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlfSxcblxuXHQvLyBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH0sXG5cblx0Ly8gdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdC8vIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfVxufSk7XG5cbi8vIFB1YmxpY2F0aW9uc1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICBNZXRlb3IucHVibGlzaCgnYWxsU3luY2hyb25pemF0aW9ucycsIGZ1bmN0aW9uIHN5bmNocm9uaXphdGlvbnNQdWJsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gU3luY2hyb25pemF0aW9ucy5maW5kKCk7XG4gIH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuLy8gdmFyIHVzZXJzREJcdD0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vIHZhciBjb2xsZWN0aW9uXHQ9IHVzZXJzREIub3BlbigndXNlcnMnKTtcblxuXG4vL2NvbnN0IGRhdGFiYXNlID0gbmV3IE1vbmdvSW50ZXJuYWxzLlJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYmVla2VlLWxpdmUnKTtcbi8vY29uc3QgY29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidXNlcnNcIiwgeyBfZHJpdmVyOiBkYXRhYmFzZSB9KTtcblxuLy9leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG5cbi8vIFNlcnZlcjIgPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgzXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cblxuLy92YXIgZGF0YWJhc2UgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcignbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9iZWVrZWUtbGl2ZScpO1xuLy9NZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHsgX2RyaXZlcjogZGF0YWJhc2UgfSk7XG5cbi8vZXhwb3J0IGNvbnN0IFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FwcHMnKTtcblxuXG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAvLyBNZXRlb3IucHVibGlzaCgnYWxsVXNlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFx0Y29uc29sZS5sb2coXCJ1c2VyczogXCIrTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpKTtcbiAgLy8gICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgQXBwcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuXG5cbi8vICMjIyAgQ3JlYXRlIGFkbWluIHVzZXIgYXQgZmlyc3Qgc3RhcnQgICMjI1xuXG5cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0XG5cdC8vIENyZWF0ZSB0aGUgYWRtaW4gcm9sZVxuXHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdHZhciB1c2VycyA9IFtcblx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdF07XG5cblx0Xy5lYWNoKHVzZXJzLCBmdW5jdGlvbiAodXNlcikge1xuXHRcdHZhciBpZDtcblx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG5cdFx0XHRlbWFpbDogXCJBZG1pblwiLFxuXHRcdFx0cGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRwcm9maWxlOntuYW1lOlwiQWRtaW5cIn1cblx0XHR9KTtcblxuXHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhpZCwgdXNlci5yb2xlcyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5pZiAoQXBwcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdHZhciBkZWZhdWx0QXBwcyA9IFtcblx0XHR7bmFtZTpcIkxpdmVcIiwgY3VzdG9tQXBwOmZhbHNlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MywgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwiMS4zLjNcIiwgdXJsOlwiaHR0cDovL2xpdmUuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLWxpdmUucG5nXCIsIGRlc2NyaXB0aW9uOlwiQmVla2VlIExpdmUgcHJvbW90ZSByZWFsLXRpbWUgaW50ZXJhY3Rpb24gYnkgYWxsb3dpbmcgbGVhcm5lcnMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGFza2luZyBxdWVzdGlvbnMsIHBvc3RpbmcgcGhvdG9zIG9yIHNoYXJpbmcgZmlsZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiUmVzb3VyY2VzXCIsIGN1c3RvbUFwcDpmYWxzZSwgb25seVRlYWNoZXI6ZmFsc2UsIG9yZGVyOjcsIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjEuMy4zXCIsIHVybDpcImh0dHA6Ly9yZXNvdXJjZXMuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXJlc291cmNlcy5wbmdcIiwgZGVzY3JpcHRpb246XCJXaXRoIEJlZWtlZSBSZXNvdXJjZXMsIHlvdSBjYW4gZWFzaWx5IHNoYXJlIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC4xXCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJXaGVlbFwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOnRydWUsIG9yZGVyOjksIGRvY191c2VyOmZhbHNlLCBkb2NfYWRtaW46ZmFsc2UsIGxhc3RfdmVyc2lvbjpcIjAuN1wiLCB1cmw6XCJodHRwOi8vd2hlZWwuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXdoZWVsLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBXaGVlbCBpcyBhIHNpbXBsZSByYW5kb20gcGlja2VyIHdoZWVsIHRoYXQgYWxsb3cgeW91IHRvIHBpY2sgdXAgYSByYW5kb20gbmFtZS5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJUaW1lclwiLCBjdXN0b21BcHA6ZmFsc2UsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo4LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCIxLjMuM1wiLCB1cmw6XCJodHRwOi8vdGltZXIuYmVla2VlLmJveFwiLCBpY29uOlwiYmVla2VlLXRpbWVyLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIkJlZWtlZSBUaW1lciBpcyBhIHNpbXBsZSB0aW1lciB0aGF0IGxldHMgeW91ciBsZWFybmVycyBrbm93IGhvdyBtdWNoIHRpbWUgdGhleSBoYXZlIGxlZnQuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMVwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiTW9vZGxlXCIsIGN1c3RvbUFwcDp0cnVlLCBvbmx5VGVhY2hlcjpmYWxzZSwgb3JkZXI6MSwgZG9jX3VzZXI6XCJtb29kbGVfdGVhY2hlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vbW9vZGxlLmJlZWtlZS5ib3hcIiwgaWNvbjpcIm1vb2RsZS5wbmdcIiwgZGVzY3JpcHRpb246XCJNb29kbGUgaXMgYSBmcmVlLCBvbmxpbmUgTGVhcm5pbmcgTWFuYWdlbWVudCBzeXN0ZW0gZW5hYmxpbmcgZWR1Y2F0b3JzIHRvIGNyZWF0ZSB0aGVpciBvd24gcHJpdmF0ZSB3ZWJzaXRlIGZpbGxlZCB3aXRoIGR5bmFtaWMgY291cnNlcyB0aGF0IGV4dGVuZCBsZWFybmluZywgYW55IHRpbWUsIGFueXdoZXJlLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIzLjExLjJcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIktvbGlicmlcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjoyLCBkb2NfdXNlcjpcImtvbGlicmlfdXNlcmRvYy5wZGZcIiwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8va29saWJyaS5iZWVrZWUuYm94XCIsIGljb246XCJrb2xpYnJpLnBuZ1wiLCBkZXNjcmlwdGlvbjpcIktvbGlicmkgaXMgYW4gb3Blbi1zb3VyY2UgZWR1Y2F0aW9uYWwgcGxhdGZvcm0gc3BlY2lhbGx5IGRlc2lnbmVkIHRvIHByb3ZpZGUgb2ZmbGluZSBhY2Nlc3MgdG8gYSB3aWRlIHJhbmdlIG9mIHF1YWxpdHksIG9wZW5seSBsaWNlbnNlZCBlZHVjYXRpb25hbCByZXNvdXJjZXMgaW4gbG93LXJlc291cmNlIGNvbnRleHRzIGxpa2UgcnVyYWwgc2Nob29scywgcmVmdWdlZSBjYW1wcywgb3JwaGFuYWdlcywgYW5kIGFsc28gaW4gbm9uLWZvcm1hbCBzY2hvb2wgcHJvZ3JhbXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuMTQuN1wiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdC8vIHtuYW1lOlwiRXRoZXJwYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vZXRoZXJwYWQuYmVla2VlLmJveFwiLCBpY29uOlwiZXRoZXJwYWQucG5nXCIsIGRlc2NyaXB0aW9uOlwiRXRoZXJwYWQgYWxsb3dzIHlvdSB0byBlZGl0IGRvY3VtZW50cyBjb2xsYWJvcmF0aXZlbHkgaW4gcmVhbC10aW1lLCBtdWNoIGxpa2UgYSBsaXZlIG11bHRpLXBsYXllciBlZGl0b3IgdGhhdCBydW5zIGluIHlvdXIgYnJvd3Nlci4gV3JpdGUgYXJ0aWNsZXMsIHByZXNzIHJlbGVhc2VzLCB0by1kbyBsaXN0cywgZXRjLiB0b2dldGhlciB3aXRoIHlvdXIgZnJpZW5kcywgZmVsbG93IHN0dWRlbnRzIG9yIGNvbGxlYWd1ZXMsIGFsbCB3b3JraW5nIG9uIHRoZSBzYW1lIGRvY3VtZW50IGF0IHRoZSBzYW1lIHRpbWUuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjEuOC4xNFwiLCBoaWRkZW46ZmFsc2V9LFxuXHRcdHtuYW1lOlwiU3Rvcm1cIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo0LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vc3Rvcm0uYmVla2VlLmJveFwiLCBpY29uOlwic3Rvcm0ucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGFuZCBhbmltYXRlIGxpdmUgc3VydmV5cywgYnJhaW5zdG9ybXMgYW5kIHF1aXp6ZXMuXCIsIGluc3RhbGxlZDp0cnVlLCB2ZXJzaW9uOiBcIjAuNC41XCIsIGhpZGRlbjpmYWxzZX0sXG5cdFx0e25hbWU6XCJQYWRcIiwgY3VzdG9tQXBwOnRydWUsIG9ubHlUZWFjaGVyOmZhbHNlLCBvcmRlcjo1LCBkb2NfdXNlcjpmYWxzZSwgZG9jX2FkbWluOmZhbHNlLCBsYXN0X3ZlcnNpb246XCJ4eFwiLCB1cmw6XCJodHRwOi8vcGFkLmJlZWtlZS5ib3hcIiwgaWNvbjpcInBhZC5wbmdcIiwgZGVzY3JpcHRpb246XCJDcmVhdGUgY29sbGFib3JhdGl2ZSB3YWxscyB0byBzaGFyZSBhbmQgb3JnYW5pemUgY29udGVudC5cIiwgaW5zdGFsbGVkOnRydWUsIHZlcnNpb246IFwiMC44LjFcIiwgaGlkZGVuOmZhbHNlfSxcblx0XHR7bmFtZTpcIkJ1enplclwiLCBjdXN0b21BcHA6dHJ1ZSwgb25seVRlYWNoZXI6dHJ1ZSwgb3JkZXI6NiwgZG9jX3VzZXI6ZmFsc2UsIGRvY19hZG1pbjpmYWxzZSwgbGFzdF92ZXJzaW9uOlwieHhcIiwgdXJsOlwiaHR0cDovL2J1enplci5iZWVrZWUuYm94XCIsIGljb246XCJidXp6ZXIucG5nXCIsIGRlc2NyaXB0aW9uOlwiQ3JlYXRlIGEgdmlydHVhbCBnYW1pbmcgcm9vbSBhcm91bmQgYSBjb25uZWN0ZWQgYnV6emVyLlwiLCBpbnN0YWxsZWQ6dHJ1ZSwgdmVyc2lvbjogXCIwLjIuNFwiLCBoaWRkZW46ZmFsc2V9LFxuXG5cdF07XG5cblx0Xy5lYWNoKGRlZmF1bHRBcHBzLCBmdW5jdGlvbiAoZGVmYXVsdEFwcHMpIHtcblx0XHRBcHBzLmluc2VydChkZWZhdWx0QXBwcyk7XG5cdH0pO1xufSIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdtZXRlb3IvaHR0cCdcblxuTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdHZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuXHRleGVjID0gTnBtLnJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjOyAvLyBObyBpZGVhIHdoYXQgaXMgdGhpcyA/XG5cdGNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XG5cblx0dmFyIHdpZmlTZXR0aW5nc1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Mud2lmaVNldHRpbmdzUGF0aDtcblx0dmFyIGNvbmZpZ1BhdGggPSBNZXRlb3Iuc2V0dGluZ3MuY29uZmlnUGF0aDtcblx0Y29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKCdyZWFkbGluZScpO1xuXG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0J2FkbWluU2V0TmV3UGFzc3dvcmQnOiBmdW5jdGlvbihhZG1pbklkLCB1c2VySWQsIG5ld1Bhc3N3b3JkKSB7IC8vIEFkbWluIGNhbiBmb3JjaWJseSBjaGFuZ2UgdGhlIHBhc3N3b3JkIGZvciBhIHVzZXJcblx0XHRcdGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgJ2FkbWluJykpIHtcblx0XHRcdFx0QWNjb3VudHMuc2V0UGFzc3dvcmQodXNlcklkLCBuZXdQYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnY3JlYXRlQWNjb3VudCc6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0cmV0dXJuIEFjY291bnRzLmNyZWF0ZVVzZXIoe2VtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkLHByb2ZpbGU6cHJvZmlsZX0pOyAvLyBDYWxsYmFjayBpcyBub3Qgc3VwcG9ydGVkIG9uIHNlcnZlci1zaWRlXG5cdFx0fSxcblx0XHQnZWRpdEFjY291bnQnOiBmdW5jdGlvbih1c2VySWQsIGVtYWlsLCBwYXNzd29yZCwgcHJvZmlsZSkge1xuXHRcdFx0TWV0ZW9yLnVzZXJzLnVwZGF0ZSh7X2lkOiB1c2VySWR9LCB7XG5cdCAgXHRcdFx0JHNldDoge1xuXHQgICAgXHRcdFx0J2VtYWlscy4wLmFkZHJlc3MnOiBlbWFpbCxcblx0ICAgIFx0XHRcdHByb2ZpbGU6IHByb2ZpbGVcblx0ICBcdFx0XHR9XG5cdFx0XHR9KTtcdFxuXHRcdFx0aWYgKHBhc3N3b3JkKSB7XG5cdFx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2RlbGV0ZVVzZXInOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgdXNlciA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdCdhZGRBZG1pblJvbGUnOiBmdW5jdGlvbih1c2VySWQpIHtcblx0XHRcdFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpO1xuXHRcdH0sXG5cdFx0J3JlbW92ZUFkbWluUm9sZSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdFx0Um9sZXMucmVtb3ZlVXNlcnNGcm9tUm9sZXModXNlcklkLCAnYWRtaW4nKTtcblx0XHR9LFxuXHRcdC8vICdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHQvLyBcdHZhciByZXM7XG5cdFx0Ly8gXHRyZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHQvLyBcdHJldHVybiByZXM7XG5cdFx0Ly8gfSxcblx0XHQncnVuQ29tbWFuZCc6IGZ1bmN0aW9uKHBhc3N3b3JkLCBjb21tYW5kKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwiZWNobyBcIitwYXNzd29yZCtcIiB8IHN1ZG8gLVMgXCIrY29tbWFuZCk7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFVzZWRTcGFjZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcyA9IHt9O1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJkZiAvIC1oIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKSArIFwiLyBcIiArIGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDIpfScgfCB0YWlsIC0xXCIpICsgXCIgKFwiK2NtZChcImRmIC8gfCBhd2sgJ3twcmludCAoJDUpfScgfCB0YWlsIC0xXCIpK1widXNlZClcIjtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQzKX0nIHwgdGFpbCAtMVwiKVxuXHRcdFx0cmVzLnN0b3JhZ2VVc2FnZSA9IHJlcy5zdG9yYWdlVXNhZ2UvMTAwMDAwMDtcblx0XHRcdHJlcy5zdG9yYWdlVXNhZ2UgPSByZXMuc3RvcmFnZVVzYWdlLnRvRml4ZWQoMik7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIilcblx0XHRcdHJlcy5zdG9yYWdlVG90YWwgPSByZXMuc3RvcmFnZVRvdGFsLzEwMDAwMDA7XG5cdFx0XHRyZXMuc3RvcmFnZVRvdGFsID0gcmVzLnN0b3JhZ2VUb3RhbC50b0ZpeGVkKDIpO1xuXHRcdFx0cmVzLnBlcmNlbnRhZ2UgPSBjbWQoXCJkZiAvIHwgYXdrICd7cHJpbnQgKCQ1KX0nIHwgdGFpbCAtMVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0U1NJRCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdzc2lkPSguKiknKSk7XG4gIFx0XHRcdHZhciBTU0lEID0gbWF0Y2hbMV07XG4gIFx0XHRcdFNTSUQgPSBkZWNvZGVVUklDb21wb25lbnQoU1NJRC5yZXBsYWNlKC8uLi9nLCAnJSQmJykpXG4gIFx0XHRcdHJldHVybiBTU0lEO1xuXHRcdH0sXG5cdFx0J3NldFNTSUQnOiBmdW5jdGlvbihuZXdTU0lEKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0Y29uc3QgZW5jb2RlZE5ld1NTSUQgPSBuZXcgQnVmZmVyKG5ld1NTSUQpLnRvU3RyaW5nKCdoZXgnKTsgLy8gQ29udmVydCBpbnRvIEhleFxuICBcdFx0XHR2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ3NzaWQ9KC4qKScpKVsxXSwgZW5jb2RlZE5ld1NTSUQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbigpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHBhc3N3b3JkID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBwYXNzd29yZDtcblx0XHR9LFxuXHRcdCdzZXRXaWZpUGFzc3dvcmQnOiBmdW5jdGlvbihuZXdQYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgncGFzc3dvcmQ9KC4qKScpKVsxXSwgbmV3UGFzc3dvcmQpO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdnZXRXaWZpQ2hhbm5lbCc6IGZ1bmN0aW9uKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3aWZpU2V0dGluZ3NQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdjaGFubmVsPSguKiknKSk7XG4gIFx0XHRcdHZhciBjaGFubmVsID0gbWF0Y2hbMV07XG4gIFx0XHRcdHJldHVybiBjaGFubmVsO1xuXHRcdH0sXG5cdFx0J3NldFdpZmlDaGFubmVsJzogZnVuY3Rpb24obmV3Q2hhbm5lbCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnY2hhbm5lbD0oLiopJykpWzFdLCBuZXdDaGFubmVsKTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmMod2lmaVNldHRpbmdzUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnZ2V0U2VyaWFsJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdTRVJJQUw9KC4qKScpKTtcbiAgXHRcdFx0dmFyIHNlcmlhbCA9IG1hdGNoWzFdO1xuICBcdFx0XHRyZXR1cm4gc2VyaWFsO1xuXHRcdH0sXG5cdFx0J2dldE9wZXJhdG9yTmFtZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9wZXJhdG9yTmFtZTtcblx0XHRcdG9wZXJhdG9yTmFtZSA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LW9wZXJhdG9yLW5hbWUgfCBncmVwIC1tMiAnTmFtZSAgICAgICAgICAgICAnIHwgYXdrICd7cHJpbnQgJDN9J1wiKTtcblx0XHRcdHJldHVybiBvcGVyYXRvck5hbWU7XG5cdFx0fSxcblx0XHQnZ2V0U2lnbmFsU3RyZW5ndGgnOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc2lnbmFsU3RyZW5ndGg7XG5cdFx0XHRzaWduYWxTdHJlbmd0aCA9IGNtZChcInN1ZG8gcW1pY2xpIC0tZGV2aWNlPS9kZXYvY2RjLXdkbTAgLS1uYXMtZ2V0LXNpZ25hbC1zdHJlbmd0aCB8IGdyZXAgLW0xIE5ldHdvcmsgfCBhd2sgJ3twcmludCAkMywgJDJ9J1wiKTtcblx0XHRcdHJldHVybiBzaWduYWxTdHJlbmd0aDtcblx0XHR9LFxuXHRcdC8vICdnZXRCYW5kJzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0dmFyIGJhbmQ7XG4vL1x0XHRcdGJhbmQgPSBjbWQoXCJzdWRvIHFtaWNsaSAtLWRldmljZT0vZGV2L2NkYy13ZG0wIC0tbmFzLWdldC1zaWduYWwtc3RyZW5ndGggfCBncmVwIC1tMSBOZXR3b3JrIHwgYXdrIFxcXCJ7cHJpbnQgJDJ9XFxcIiB8IGN1dCAtZFxcXFwnIC1mMlwiKTtcblx0XHQvLyBcdHJldHVybiBiYW5kO1xuXHRcdC8vIH0sXG5cdFx0J2dldEFQTic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOPSguKiknKSk7XG4gIFx0XHRcdHZhciBBUE4gPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTjtcblx0XHR9LFxuXHRcdCdnZXRBUE5Vc2VyJzogZnVuY3Rpb24gKCkge1xuICBcdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG1hdGNoID0gZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE5fVVNFUk5BTUU9KC4qKScpKTtcbiAgXHRcdFx0dmFyIEFQTlVzZXIgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlVzZXI7XG5cdFx0fSxcblx0XHQnZ2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICBcdFx0XHR2YXIgbWF0Y2ggPSBkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTl9QQVNTV09SRD0oLiopJykpO1xuICBcdFx0XHR2YXIgQVBOUGFzc3dvcmQgPSBtYXRjaFsxXTtcbiAgXHRcdFx0cmV0dXJuIEFQTlBhc3N3b3JkO1xuXHRcdH0sXG5cdFx0J2dldFNpbVBpbic6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBtYXRjaCA9IGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0oLiopJykpO1xuICBcdFx0XHR2YXIgU2ltUGluID0gbWF0Y2hbMV07XG4gIFx0XHRcdGlmIChTaW1QaW4gIT0gXCJcIilcbiAgXHRcdFx0XHRyZXR1cm4gXCIqKioqKipcIjtcbiAgXHRcdFx0ZWxzZVxuICBcdFx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH0sXG5cdFx0J3NldFNpbVBpbic6IGZ1bmN0aW9uKFBJTikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnU0lNX1BJTj0uKicpKSwgJ1NJTV9QSU49JytQSU4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE4nOiBmdW5jdGlvbihBUE4sIHVzZXIsIHBhc3N3b3JkKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgXHRcdFx0dmFyIG5ld0RhdGEgPSBkYXRhLnJlcGxhY2UoZGF0YS5tYXRjaChuZXcgUmVnRXhwKCdBUE49LionKSksICdBUE49JytBUE4pO1xuICBcdFx0XHQvLyB2YXIgbmV3RGF0YSA9IGRhdGEucmVwbGFjZShkYXRhLm1hdGNoKG5ldyBSZWdFeHAoJ0FQTj0oLiopJykpWzFdLCBBUE4pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdEYXRhLCAndXRmLTgnKTtcblx0XHR9LFxuXHRcdCdzZXRBUE5Vc2VyJzogZnVuY3Rpb24oQVBOVXNlcikge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1VTRVJOQU1FPS4qJykpLCAnQVBOX1VTRVJOQU1FPScrQVBOVXNlcik7XG4gIFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3RGF0YSwgJ3V0Zi04Jyk7XG5cdFx0fSxcblx0XHQnc2V0QVBOUGFzc3dvcmQnOiBmdW5jdGlvbihBUE5QYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gIFx0XHRcdHZhciBuZXdEYXRhID0gZGF0YS5yZXBsYWNlKGRhdGEubWF0Y2gobmV3IFJlZ0V4cCgnQVBOX1BBU1NXT1JEPS4qJykpLCAnQVBOX1BBU1NXT1JEPScrQVBOUGFzc3dvcmQpO1xuICBcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGNvbmZpZ1BhdGgsIG5ld0RhdGEsICd1dGYtOCcpO1xuXHRcdH0sXG5cdFx0J2dldFJlbW90ZVN0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgcmVtb3RlLWlvdC5zZXJ2aWNlID4vZGV2L251bGwgMj4mMSAmJiBlY2hvIDEgfHwgZWNobyAwXCIpO1xuXHRcdFx0aWYgKHJlc1swXSA9PSBcIjFcIikgeyAvLyBbMF0gaXMgYSBoYWNrIGJlY2F1c2UgdGhlIHJlc3VsdCByZXMgaGFzIG9uZSBleHRyYSBjaGFyYWN0ZXJcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdCdnZXRBdXRvU3luY1N0YXR1cyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN5c3RlbWN0bCBpcy1hY3RpdmUgYXV0b3N5bmMuc2VydmljZSA+L2Rldi9udWxsIDI+JjEgJiYgZWNobyAxIHx8IGVjaG8gMFwiKTtcblx0XHRcdGlmIChyZXNbMF0gPT0gXCIxXCIpIHsgLy8gWzBdIGlzIGEgaGFjayBiZWNhdXNlIHRoZSByZXN1bHQgcmVzIGhhcyBvbmUgZXh0cmEgY2hhcmFjdGVyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQnZ2V0SW50ZXJuZXRTaGFyaW5nU3RhdHVzJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyB3aWZpLWFwLmNvbmZpZyBnZXQgc2hhcmUuZGlzYWJsZWRcIik7XG5cblx0XHRcdGlmIChyZXMuaW5jbHVkZXMoXCJ0cnVlXCIpKSB7XG5cdFx0XHRcdHJlcyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0cmVzID0gdHJ1ZTtcblx0XHRcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD1mYWxzZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVJbnRlcm5ldFNoYXJpbmcnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHRyZXMgPSBjbWQoXCJzdWRvIHdpZmktYXAuY29uZmlnIHNldCBzaGFyZS5kaXNhYmxlZD10cnVlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0YXJ0IHJlbW90ZS1pb3Quc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdkaXNhY3RpdmF0ZVJlbW90ZSc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmVzMiA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIGRpc2FibGUgcmVtb3RlLWlvdC5zZXJ2aWNlXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdhY3RpdmF0ZUF1dG9TeW5jJzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVzO1xuXHRcdFx0cmVzID0gY21kKFwic3VkbyBzeXN0ZW1jdGwgc3RhcnQgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBlbmFibGUgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZGlzYWN0aXZhdGVBdXRvU3luYyc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHN0b3AgYXV0b3N5bmMuc2VydmljZVwiKTtcblx0XHRcdHJlczIgPSBjbWQoXCJzdWRvIHN5c3RlbWN0bCBkaXNhYmxlIGF1dG9zeW5jLnNlcnZpY2VcIik7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH0sXG5cdFx0J2dldFBpSnVpY2VTdGF0dXMnOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXM7XG5cdFx0XHR2YXIgc2NyaXB0c1BhdGggPSBNZXRlb3Iuc2V0dGluZ3Muc2NyaXB0c1BhdGg7XG5cdFx0XHRyZXMgPSBjbWQoXCJweXRob24zIFwiK3NjcmlwdHNQYXRoK1wiL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJweXRob24zIC9ob21lL3VidW50dS9zY3JpcHRzL3BpanVpY2Vfc3RhdHVzLnB5XCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRFdGgwSVAnOiBmdW5jdGlvbigpIHsgLy8gR2V0IElQIG9mIGJveFxuXHRcdFx0dmFyIHJlcztcblx0XHRcdC8vY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitcImlmY29uZmlnIGV0aDAgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlwIDogXCIrXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpcCBhZGRyIHNob3cgZXRoMCB8IGdyZXAgXFxcImluZXRcXGJcXFwiIHwgYXdrICd7cHJpbnQgJDJ9JyB8IGN1dCAtZC8gLWYxXCIpO1xuXHRcdFx0Ly9yZXMgPSBjbWQoXCJpZmNvbmZpZyBcIitpbnRlcmZhY2UrXCIgMj4vZGV2L251bGx8YXdrICcvaW5ldCBhZGRyOi8ge3ByaW50ICQyfSd8c2VkICdzL2FkZHI6Ly8nXCIpO1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9LFxuXHRcdCdnZXRXd2FuMElQJzogZnVuY3Rpb24oKSB7IC8vIEdldCBJUCBvZiBib3hcblx0XHRcdHZhciByZXM7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrXCJpZmNvbmZpZyBldGgwIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJlcyA9IGNtZChcImlwIGFkZHIgc2hvdyB3d2FuMCB8IGdyZXAgXFxcImluZXRcXFxcYlxcXCIgfCBhd2sgJ3twcmludCAkMn0nIHwgY3V0IC1kLyAtZjFcIik7XG5cblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgZXRoMCAyPi9kZXYvbnVsbHxhd2sgJy9pbmV0IGFkZHI6LyB7cHJpbnQgJDJ9J3xzZWQgJ3MvYWRkcjovLydcIik7XG5cblx0XHRcdC8vY29uc29sZS5sb2coXCJpcCA6IFwiK1wiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaXAgYWRkciBzaG93IGV0aDAgfCBncmVwIFxcXCJpbmV0XFxiXFxcIiB8IGF3ayAne3ByaW50ICQyfScgfCBjdXQgLWQvIC1mMVwiKTtcblx0XHRcdC8vcmVzID0gY21kKFwiaWZjb25maWcgXCIraW50ZXJmYWNlK1wiIDI+L2Rldi9udWxsfGF3ayAnL2luZXQgYWRkcjovIHtwcmludCAkMn0nfHNlZCAncy9hZGRyOi8vJ1wiKTtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fSxcblx0XHQnZ2V0VmVyc2lvbic6IGZ1bmN0aW9uKCkge1xuXHRcdFx0anNvbiA9IEpTT04ucGFyc2UoQXNzZXRzLmdldFRleHQoXCJ2ZXJzaW9uLmpzb25cIikpO1xuXHRcdFx0cmV0dXJuIGpzb24udmVyc2lvbjtcblx0XHR9LFxuXHRcdCdyZXN0YXJ0TW9iaWxlQ29ubmVjdCc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJlcztcblx0XHRcdHJlcyA9IGNtZChcInN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgbW9iaWxlX2Nvbm5lY3Quc2VydmljZVwiKTtcblx0XHRcdHJldHVybiByZXM7Jydcblx0XHR9LFxuXHRcdHN5bmNocm9uaXplOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJTdGFydGluZyBzeW5jLi4uXCIpO1xuXG5cdFx0XHR2YXIgZGV2aWNlU2VyaWFsID0gTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5zZXJpYWw7XG5cdFx0XHR2YXIgZGV2aWNlVG9rZW4gPSBNZXRlb3Iuc2V0dGluZ3MubW9vZGxlQVBJVG9rZW47XG5cdFx0XHR2YXIgdXJsID0gTWV0ZW9yLnNldHRpbmdzLmNsb3VkVVJMICsgXCIvYXBpL3N0YXJ0U3luY1wiO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0J2RldmljZVNlcmlhbCc6IGRldmljZVNlcmlhbCxcblx0XHRcdFx0XHQnZGV2aWNlVG9rZW4nOiBkZXZpY2VUb2tlblxuXHRcdFx0XHR9LFxuXHRcdFx0ICAgIG5wbVJlcXVlc3RPcHRpb25zOiB7XG5cdFx0XHQgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgLy8gVE9ETyByZW1vdmUgd2hlbiBkZXBsb3lcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgIHRpbWVvdXQ6IDEyMDAwMDAsXG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInVybDogXCIrdXJsKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJvcHRpb25zOiBcIitvcHRpb25zKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpY2lcIik7XG52YXIgcmVzdWx0ID0gSFRUUC5jYWxsKCdQT1NUJywgdXJsLCBvcHRpb25zKTtcblxuXHRcdFx0XHQvL3ZhciByZXN1bHQgPSBIVFRQLnBvc3QoIHVybCwgb3B0aW9ucyApO1xuXHRcdFx0XHR2YXIgcmVzdWx0Q29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuXHRcdFx0XHQvL1N5bmNocm9uaXphdGlvbnMuaW5zZXJ0KHtkYXRlOkRhdGUubm93KCl9KTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdENvbnRlbnQ7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN5bmNyb25pemUuLi5cIiwgZSApO1xuXHRcdFx0XHRyZXR1cm4gXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3luY3Jvbml6ZS4uLiBcIisgZTtcblx0XHRcdH1cblx0XHQvL3JldHVybiByZXN1bHRDb250ZW50O1xuXHRcdH0sXG5cdH0pO1xufVxufSk7IiwiLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbEFwcHMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEFwcHMuZmluZCh7fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJ1c2Vyc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoe30sIHtmaWVsZHM6e2NyZWF0ZWRBdDogdHJ1ZSwgcHJvZmlsZTogdHJ1ZSwgZW1haWxzOiB0cnVlLCB1c2VybmFtZTogdHJ1ZX19KTtcbi8vIH0pO1xuXG5cbiAgTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24gKCkge1xuICBcdGNvbnNvbGUubG9nKFwidXNlcnM6IFwiK01ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSk7XG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKCk7XG4gIH0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FwcHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9zeW5jaHJvbml6YXRpb25zLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcblxuXG4vL2ltcG9ydCB7RERQfSBmcm9tICdtZXRlb3IvZGRwJztcbi8vaW1wb3J0IHtBY2NvdW50c30gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9zdGFydHVwL3NlcnZlci9maXh0dXJlcy5qcyc7XG5cbi8vIGltcG9ydCAnLi4vaW1wb3J0cy9hcGkvZml4dHVyZXMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJtZXRlb3Igc3RhcnRlZC4uLlwiKTtcblxuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuIC8vICBTZXJ2ZXIyID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4M1wiKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFNlcnZlcjI7XG5cdC8vIGNvbnNvbGUubG9nKFwib24gY29ubmVjdGUuLi5cIik7XG59KTtcbiJdfQ==
